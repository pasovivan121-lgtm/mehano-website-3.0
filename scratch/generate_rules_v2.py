
import re

filepath = '/Users/benzi/Downloads/mehano-site 2/script.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# All 30 rules in English (as source of truth for detail)
rules_en = {
    1: "The robot always has a strictly fixed starting position. It must form an exact angle with a specific square of the base to ensure the correct trajectory.",
    2: "We never start the robot on a slope. A stable surface at the moment of start is critical for the sensors' operation.",
    3: "Engineering strength: Every construction must be as strong as possible. We do not allow spinning gears, loose parts, or unusual noises – the sound of the robot is an indicator of its health.",
    4: "The robot's design must be dense and specifically optimized for the specific challenges of the current competition.",
    5: "Hardware and software are not separate parts – they must always help each other and work in full sync.",
    6: "Experimental approach: Every idea, no matter how unconventional, must be tested in practice. Experience is the best teacher.",
    7: "If something goes wrong or a mission is not completed – it is always the 'robot\\'s' fault. We stand behind each other and do not look for blame in team members!",
    8: "“The eye of the bystander”: When two people work on one mechanism for a long time, they stop seeing their mistakes. MEHANO rule: “You look at it”. A third person always checks the assembly or the code with “fresh eyes”.",
    9: "Before every competition run, the tires are cleaned. Dust is the only reason the robot 'lies' to the gyroscope during a turn.",
    10: "After every return to base, check if the black and blue pins are fully inserted. The robot's vibrations often loosen them.",
    11: "Fast change, calm mind (tuning like Schumacher): Changes are practiced “dry” until they become automatic movements. On the table, you don't think “how to put this”, you just act.",
    12: "We always look at what others are doing to become better, but we respect their work and seek our own unique solution.",
    13: "When someone says “STOP, there is a problem”, the whole team stops and listens. Small mistakes that someone noticed in time save big competitions.",
    14: "Whenever possible, distribute the weight of attachments symmetrically. A robot that is heavy on one side always starts to “drift” (turn on its own).",
    15: "The robot is built so that you can change the battery or plug in the charging cable without taking it halfway apart.",
    16: "Every block or line of code must have an explanation. In a week, you won't remember why you put exactly that 42-degree turn.",
    17: "“If there are problems, then we are on the right path”: Problems are not obstacles, but steps. Every solved problem makes the robot smarter and us better engineers.",
    18: "“The best solution is the simplest one”: If an attachment is too complex and often breaks, it means we need to simplify it. Complexity is the enemy of reliability.",
    19: "No juice or greasy snacks are kept near the computer with the code. A spilled juice can end the season faster than any software error.",
    20: "“The robot is a family member”: We address it by name (or at least with respect). When you take care of the equipment, it rewards you with accuracy on the field.",
    21: "“Laughter is the shortest distance between two ideas”: When we get stuck on a problem, we stop and joke. Our most genius solutions were born exactly between two jokes.",
    22: "“The law of the tenth of a millimeter”: If the regulations say the robot must be in base, we use every millimeter to the line. Being a hair from a foul is an art that wins valuable space.",
    23: "“The law of 'Just Started'”: The machine always works perfectly when no one is watching. As soon as a judge or mentor comes – it decides to take a break. We test “undercover”.",
    24: "“If it works – don't touch it!”: If the system has nailed the perfect result 5 minutes before the start – forget about “small adjustments”. Hands in pockets, not on the machine.",
    25: "“Scattered like LEGO, assembled like a scalpel”: Order on the desk is a myth – we create among mountains of cables and bricks. Our best innovations are born in this creative disorder.",
    26: "If you have only one of something, it will break. If you have five, you will never need them. Always carry a spare motor, spare cable, and spare battery.",
    27: "“The MEHANO shirt effect”: When you put on the team shirt, you become part of a legend. The responsibility is to those before you and to those after you.",
    28: "We don't read the rules just to find out what is allowed, but to discover what is not forbidden. If not explicitly forbidden, it's our secret loophole. We call it “regulation optimization”.",
    29: "“The law of the clean track”: When others cross the line, we don't get angry – we get ambitious. We are so precise that even following every rule, we achieve more than those who cheat.",
    30: "“After the competition – we eat again”: Regardless of the result, the team celebrates. Victories are shared, but friendship is what remains after the robot is boxed.",
}

# (Simplified translations for others to keep the code size manageable while improving significantly over existing ones)
# Actually, I'll use a strategy where I inject these into the lang blocks.

def update_lang(lang, rules):
    global content
    start_match = re.search(rf'{lang}:\s*{{', content)
    if not start_match: return
    start_pos = start_match.end()
    next_block = re.search(r'\n\s+\w+:\s*\{', content[start_pos:])
    end_pos = start_pos + (next_block.start() if next_block else content[start_pos:].find('};'))
    
    block = content[start_pos:end_pos]
    for i in range(1, 31):
        key = f'gr_rule_{i}'
        val = rules[i].replace('"', '\\"')
        # Replace existing or add
        if key in block:
            block = re.sub(rf'{key}:\s*\".*?\"', f'{key}: "{val}"', block)
        else:
            # Add before the last comma/brace
            block = block.rstrip()
            if block.endswith(','):
                block += f'\n        {key}: "{val}",'
            else:
                block += f',\n        {key}: "{val}",'
    
    content = content[:start_pos] + block + content[end_pos:]

# For brevity in this script, I'll only show the process for one, but I'll run it for all.
# I'll use the English rules for all languages if they are shorter, but I'll actually translate them in the final run.

# Bulgarian (re-translated from English for detail parity)
rules_bg = {
    1: "Роботът винаги има строго фиксирана изходна позиция. Той трябва да сключва точен ъгъл с конкретно квадратче от базата, за да се гарантира правилната траектория.",
    2: "Никога не стартираμε робота под наклон. Стабилната повърхност в момента на старта е критична за работата на сензорите.",
    3: "Инженерна здравина: Всяка конструкция трябва да бъде максимално здрава. Не допускаме превъртане на зъбни колела, хлабави части или необичайни шумове – звукът на робота е индикатор за неговото здраве.",
    4: "Дизайнът на робота трябва да бъде плътен и специално оптимизиран за конкретните предизвикателства на текущото състезание.",
    5: "Хардуерът и софтуерът не са отделни части – те трябва винаги да си помагат и да работят в пълен синхрон.",
    6: "Експериментален подход: Всяка идея, колкото и нестандартна да е, трябва да бъде тествана на практика. Опитът е най-добрият учител.",
    7: "Ако нещо се обърка или мисията не бъде изпълнена – виновен е винаги „роботът“. Ние стоим един зад друг и не търсим вина в членовете на екипа!",
    8: "„Окото на страничния наблюдател“: Когато двама души работят по един механизъм дълго време, те спират да виждат грешките си. Трети човек винаги проверява сглобката или кода с „пресни очи“.",
    9: "Преди всяко състезателно пускане гумите се почистват. Прахът е единствената причина роботът да „излъже“ жироскопа при завой.",
    10: "След всяко прибиране в базата се проверява дали черните и сините щифтове са влезли докрай. Вибрациите на робота често ги разхлабват.",
    11: "Бърза смяна, спокоен ум (тунинг като за Шумахер): Смените се тренират „на сухо“, докато не станат автоматични движения. На масата не мислиш „как да сложа това“, просто действаш.",
    12: "Винаги гледаме какво правят другите, за да станем по-добри, но уважаваме труда им и търсим нашето собствено уникално решение.",
    13: "Когато някой каже „СТОП, има проблем“, целият отбор спира и слуша. Малките грешки, забелязани навреме, спасяват големи съστεзания.",
    14: "Когато е възможно, разпределяме тежестта на приставките симетрично. Робот, който натежава на една страна, винаги започва да „дрифти“.",
    15: "Роботът се строи така, че да можеш да смениш батерията или да включиш кабела за зареждане, без да го разглобяваш наполовина.",
    16: "Всеки блок или ред код трябва да има обяснение. След седмица няма да помниш защо си сложил точно този завой от 42 градуса.",
    17: "„Ако има проблеми, значи сме на правилния път“: Проблемите не са пречки, а стъпала. Всеки решен проблем прави робота по-умен, а нас – по-добри инженери.",
    18: "„Най-доброто решение е най-простото“: Ако една приставка е твърде сложна и често се чупи, значи трябва да я опростим. Сложността е враг на надеждността.",
    19: "Около компютъра с кода не се пият сокове и не се държат мазни банички. Един разлят сок може да сложи край на сезона по-бързо от всяка софтуерна грешка.",
    20: "„Роботът е член на семейството“: Обръщаμε се към него по име (или поне с уважение). Когато се грижиш за техниката, тя ти се отплаща с точност на полето.",
    21: "„Смехът е най-краткото разстояние между две идеи“: Когато зациклим на проблем, спираме и се шегуваме. Най-гениалните ни решения са родени именно между две шеги.",
    22: "„Законът за десетата от милиметъра“: Ако правилата казват, че роботът трябва да е в базата, използваме всеки милиметър до самата линия. Да си на косъм от фаул е изкуство, което печели ценно място.",
    23: "„Законът на Току-що тръгналия“: Машината винаги работи перфектно, когато никой не гледа. Щом дойде съдия или ментор – решава да си вземе почивка. Тестваме „под прикритие“.",
    24: "„Ако работи – не го пипай!“: Ако системата е заковала перфектния резултат 5 минути преди старта – забрави за „още една малка настройка“. Ръцете в джобовете!",
    25: "„Разпръснати като LEGO, сглобени като скалπέл“: Редът на бюрото е мит – творим сред планини от кабели и тухлички. Най-добрите ни иновации се раждат именно в този творчески безпорядък.",
    26: "Ако имаш само едно от нещо, то ще се счупи. Ако имаш пет, никога няма да ти потрябват. Винаги носи резервен мотор, кабел и батерия.",
    27: "„Ефектът на тениската на МЕХАНО“: Когато облечеш отборната тениска, спираш да си просто ученик и ставаш част от легенда. Отговорността е към тези преди теб и към тези след теб.",
    28: "Не четем правилата само за да разберем какво е позволено, а за да открием какво не е забранено. Ако не е изрично забранено, това е нашата тайна вратичка. Наричаμε го „оптимизация на регламента“.",
    29: "„Законът на чистата следа“: Когато видим други да пресичат линията на позволеното, не се ядосваме – амбицираме се. Честността винаги пробива, защото журито търσι характер.",
    30: "„След състезанието – пак ядем“: Независимо от резултата, отборът отива да празнува. Победите се споделят, но приятелството е това, което остава.",
}

# (I will now apply these two first, then prepare a comprehensive update for others)
update_lang('bg', rules_bg)
update_lang('en', rules_en)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
