// script.js
const categoryButtons = document.getElementById("categoryButtons");
const bookList = document.getElementById("bookList");
const bookDetails = document.getElementById("bookDetails");

// const bookContent = document.getElementById('book-content');
// const playButton = document.getElementById('play');
// const pauseButton = document.getElementById('pause');
// const restartButton = document.getElementById('restart');
// let speechSynthesisUtterance;
// let highlightedTextNode = null;

const books = [
    {
        title: "测试。小猫钓鱼。哈哈哈",
        coverURL: "https://i.imgur.com/7G6OlTk.png",
        description: "老猫和小猫一起在河边钓鱼。\n一只蜻蜓飞来了。小猫看见了，放下钓鱼竿，就去捉蜻蜓。蜻蜓飞走了，小猫没捉着，空着手回到河边来。小猫一看，老猫钓着了一条大鱼。\n一只蝴蝶飞来了。小猫看见了，放下钓鱼竿，又去捉蝴蝶。蝴蝶飞走了，小猫又没捉着，空着手回到河边来。小猫一看，老猫又钓着了一条大鱼。\n小猫说：“真气人，我怎么一条小鱼也钓不着？”\n老猫看了看小猫，说：“钓鱼就钓鱼，不要这么三心二意的。一会捉蜻蜓，一会捉蝴蝶，怎么能钓着鱼呢？”\n小猫听了老猫的话，就一心一意地钓鱼。\n蜻蜓又飞来了，蝴蝶又飞来了，小猫就像没看见一样。不大一会，小猫也钓着了一条大鱼。\n小猫钓鱼这个故事告诉我们：做任何事情都不能三心二 意，一会这样一会那样，最终会一事无成！做事要有耐心不能被周围的事物所影响。",
        category: "Level A",
    },
    {
        title: "小猫钓鱼",
        coverURL: "https://i.imgur.com/aM68Qty.png",
        description: "老猫和小猫一起在河边钓鱼。\n一只蜻蜓飞来了。小猫看见了，放下钓鱼竿，就去捉蜻蜓。蜻蜓飞走了，小猫没捉着，空着手回到河边来。小猫一看，老猫钓着了一条大鱼。\n一只蝴蝶飞来了。小猫看见了，放下钓鱼竿，又去捉蝴蝶。蝴蝶飞走了，小猫又没捉着，空着手回到河边来。小猫一看，老猫又钓着了一条大鱼。\n小猫说：“真气人，我怎么一条小鱼也钓不着？”\n老猫看了看小猫，说：“钓鱼就钓鱼，不要这么三心二意的。一会捉蜻蜓，一会捉蝴蝶，怎么能钓着鱼呢？”\n小猫听了老猫的话，就一心一意地钓鱼。\n蜻蜓又飞来了，蝴蝶又飞来了，小猫就像没看见一样。不大一会，小猫也钓着了一条大鱼。\n小猫钓鱼这个故事告诉我们：做任何事情都不能三心二 意，一会这样一会那样，最终会一事无成！做事要有耐心不能被周围的事物所影响。",
        category: "Level A",
    },
    {
        title: "曹冲称象",
        coverURL: "https://i.imgur.com/gKoS7ef.png",
        description: "古时候有个叫曹操的人。别人送他一头大象，他很高兴，带着儿子和官员们一同去看。大象又高又大，身子像一堵墙，腿像四根柱子。官员们一边看一边议论：“这么大的象，到底有多重呢？”曹操问：“谁有办法把这头大象称一称？”有的说：“得造一杆大秤，砍一棵大树做秤杆。”有的说：“有了大秤也不行啊，谁有那么大的力气提得起这杆大秤呢？”曹操听了直摇头。曹操的儿子曹冲才七岁，他站出来，说：“我有个办法。把大象赶到一艘大船上，看船身下沉多少，就沿着水面，在船舷上画一条线。再把大象赶上岸，往船上装石头，装到船下沉到画线的地方为止。然后称一称船上的石头。石头有多重，大象就有多重。”曹操微笑着点一点头。他叫人照曹冲说的办法去做，果然称出了大象的重量。",
        category: "Level A",
    },
    {
        title: "掩耳盗铃",
        coverURL: "https://i.imgur.com/DTp7UXI.png",
        description: "春秋时期，有个贪婪而又愚蠢的人，自己不愿劳动，见到别人的财物，总要想办法弄到才心安。有一天，他听说晋国世家赵氏灭掉了范氏，便急忙赶到范氏家去，想趁乱捞点油水。谁知范氏家所有值钱的东西都被洗劫一空，他好不懊恼，真后悔白跑这一趟。突然，他发现院中柴堆里露出一片亮光，便走过去，扒开横七竖八的柴火一看，原来是一口大钟。他仔细审视了一番，断定这口大钟是用上等的黄铜做成的，不禁喜出望外，眼睛笑得眯成了一条缝。他迫不及待地去背钟，可是那钟又大又高，沉甸甸的，不要说背了，连移动一下都不可能。眼看快到手的东西不能据为己有，他急得团团转。就在这时，他在院墙脚看见了一把大铁锤，心里顿时有了主意，高兴地自语道：“真是天助我也。”他忙不迭地抡起铁锤，狠狠地朝大钟砸下去，想把大钟砸成碎块，然后再用麻袋装回去。可是，大钟发出的巨响把他吓了一大跳，并且，那“嗡嗡嗡”的余音久久地在院子上空回荡，把他的耳朵都要震聋了。他很害怕别人听见了钟声会跑来抢他的钟，就赶快用双手紧紧捂住自己的耳朵。于是，他听不见钟声了。他以为自己听不见，别人也一定听不见，就放心大胆砸起钟来。每砸一下，都要用双手括住耳朵，待钟声响过后，才松开手再砸。这样一下一下，钟声响亮地传到很远的地方。人们听到钟声蜂拥而至，把小偷捉住了。",
        category: "Level B",
    },
    {
        title: "刻舟求剑",
        coverURL: "https://i.imgur.com/VIgkKrf.png",
        description: "战国时，楚国有个人坐船渡江。船到江心，楚人一不小心，随身携带的一把宝剑滑落江中，他赶紧伸手去抓，可惜为时已晚，宝剑已经落入江中。船上的人对此感到非常惋惜。但那楚人似乎胸有成竹，马上掏出一把小刀，在船舷上刻上个记号，并且对大家说：“这是宝剑落水的地方，所以我要刻上一个记号。”大家都不理解他为何要这样做，也不再去问他。船靠岸后，那楚人立即在船上刻有记号的地方下水，去捞取掉落的宝剑。楚人捞了半天，始终不见宝剑的影子。他觉得很奇怪，自言自语地说“我的宝剑不就是从这里掉下去的吗？我还在这里刻上了记号，现在怎么会找不到呢？”听他这么一说，那些人纷纷大笑起来，说道：“船一直在行进，而你的宝剑却沉入了水底，不会随船移动，你又怎能找得到你的剑呢？”",
        category: "Level B",
    },
    {
        title: "磨刀不误砍柴工",
        coverURL: "https://i.imgur.com/R3P7pPq.png",
        description: "阿德、阿财两个樵夫一起上山砍柴。上山砍柴一定要早睡早起，才可以在天亮时抵达砍柴地点。阿德想，多砍一捆就多一份收入，我明天可要起得更早，在天亮之前抵达。阿财则在回家以后抓紧时间磨刀，并且准备第二天把磨刀石带上山。第二天，阿德比阿财先到山上。他一开始就使尽浑身力气工作，一刻也不敢歇息。阿财虽然较迟上山，砍柴的速度却比昨天快，不一会，就追上了阿德的进度。到了中午，阿财停了下来磨刀。他向阿德建议：不如你也休息一会吧。先把斧头磨一磨，再继续砍也不迟。家中的孩子闹着要吃野山楂，我们也可顺便采些回去。阿德拒绝了阿财，心想：我才不想浪费时间。趁着你休息的时候，我还可以抓紧时间多砍几捆柴呢。很快一天又结束了，阿德只砍了六捆柴，而阿财除了所砍的九捆柴，还采了一些哄孩子开心的野山楂。阿德百思不得其解，他想不通为什么自己那么努力，却没有阿财砍的多。第三天，阿德一边努力砍树，一边观察阿财工作的情况，他看不出阿财有什么秘诀，但他砍的就是快。终于，阿德再也忍不住问道：我一直很努力地工作，连休息的时间也没有。为什么你砍的比我还多又快呢，阿财看着他笑道：砍柴除了技术和力气，更重要的是我们手里的斧头。我经常磨刀，刀锋锋利，所砍的柴当然比较多，而你从来都不磨刀，虽然费的力气可能比我还多，但是斧头却越来越钝，砍的柴当然就少啊。",
        category: "Level B",
    },
    {
        title: "卖火柴的小女孩",
        coverURL: "https://i.imgur.com/L7AhcHS.png",
        description: "天冷极了，下着雪，又快黑了。这是一年的最后一天──大年夜。在这又冷又黑的晚上，一个没戴帽子、没戴手套、也没穿鞋子的小女孩，在街上缓缓地走着。她从家里出来的时候还穿着一双拖鞋，但是有什么用呢？那是一双很大的拖鞋──那么大，一向是她妈妈穿的。她穿过马路的时候，两辆马车飞快地冲过来，吓得她把鞋都跑掉了。一只怎么也找不着，另一只叫一个男孩捡起来拿着跑了。他说，将来他有了孩子可以拿它当摇篮。小姑娘只好赤着脚走，一双小脚冻得红一块青一块的。她的旧围裙里兜着许多火柴，手里还拿着一把。这一整天，谁也没买过她一根火柴，谁也没给过她一个钱。可怜的小女孩！她又冷又饿，哆哆嗦嗦地向前走。雪花落在她的金黄的长头发上，那头发打成卷披在肩上，看上去很美丽，不过她没注意这些。每个窗子里都透出灯光来，街上飘着一股烤鹅的香味，因为这是平安夜儿童故事大全;她可忘不了这个。她在一座房子的墙角里坐下来，蜷着腿缩成一团。她觉得更冷了。她不敢回家，因为她没卖掉一根火柴，没挣到一个钱，爸爸一定会打她的。再说，家里跟街上一样冷。他们头上只有个房顶，虽然最大的裂缝已经用*和破布堵住了，风还是可以灌进来。她的一双小手几乎冻僵了。啊，哪怕一根小小的火柴，对她也是有好处的！她敢从一大把火柴里抽出一小根，在墙上擦燃了，来暖和暖和自己的小手吗？她终于抽出了一根。哧！火柴燃起来了，冒出火焰来了！她把小手拢在火焰上。多么温暖多么明亮的火焰啊，简直像一支小小的蜡烛。这是一道奇异的火光！小女孩觉得自己好像坐在一个大火炉前面，火炉装着闪亮的铜脚和铜把手，烧得旺旺的，暖烘烘的，多么舒服啊！哎，这是怎么回事呢？她刚把脚伸出去，想让脚也暖和一下，火柴灭了，火炉不见了。她坐在那，手里只有一根烧过了的火柴梗。她又擦了一根。火柴燃起来了，发出亮光来了。亮光落在墙上，那忽然变得像薄纱那么透明，她可以一直看到屋里。桌上铺着雪白的台布，摆着精致的盘子和碗，肚子里填满了苹果和梅子的烤鹅正冒着香气。更妙的是这只鹅从盘子里跳下来，背上插着刀和叉，摇摇摆摆地在地板上走着，一直向这个穷苦的小女孩走来。这时候，火柴又灭了，她面前只有一堵又厚又冷的墙。她又擦着了一根火柴。这一回，她坐在美丽的圣诞树下。这棵圣诞树，比她去年圣诞节透过富商家的玻璃门看到的还要大，还要美。翠绿的树枝上点着几千支明晃晃的蜡烛，许多幅美丽的彩色画片，跟挂在商店橱窗里的一个样，在向她眨眼睛。小女孩向画片伸出手去。这时候，火柴又灭了。只见圣诞树上的烛光越升越高，最后成了在天空中闪烁的星星。有一颗星星落下来了，在天空中划出了一道细长的红光。有一个什么人快要死了。小女孩说。唯一疼她的奶奶活着的时候告诉过她：一颗星星落下来，就有一个灵魂要到上帝那去了。她在墙上又擦着了一根火柴。这一回，火柴把周围全照亮了。奶奶出现在亮光里，是那么温和，那么慈爱。奶奶！小女孩叫起来，啊！请把我带走吧！我知道，火柴一灭，您就会不见的，像那暖和的火炉，喷香的烤鹅，美丽的圣诞树一个样，就会不见的！她赶紧擦着了一大把火柴，要把奶奶留住。一大把火柴发出强烈的光，照得跟白天一样明亮！奶奶从来没有像现在这样高大，这样美丽。她把小女孩抱起来，搂在怀里。她们俩在光明和快乐中飞走了，越飞越高，飞到那没有寒冷，没有饥饿，也没有痛苦的地方去了。第二天清晨，这个小女孩坐在墙角里，两腮通红，嘴上带着微笑。她死了，在旧年的大年夜冻死了。新年的太阳升起来了，照在她小小的尸体上。小女孩坐在那，手里还捏着一把烧过了的火柴梗。她想给自己暖和一下人们说。谁也不知道她曾经看到过多么美丽的东西，她曾经多么幸福，跟着她奶奶一起走向新年的幸福中去。",
        category: "Level C",
    },
    {
        title: "三只小猪",
        coverURL: "https://i.imgur.com/TrNENYJ.png",
        description: "在一个遥远的山村里，住着一位猪妈妈和她的三可爱的小猪。妈妈每天很辛苦，小猪们一天天长大了，可还是什么事都不做。一天晚上，吃过晚饭，猪妈妈把孩子们叫到面前郑重其事地说\:\"你们已经长大了，应该独立生活了，等你们盖好自己的房后就搬出去住吧。\"三只小猪谁也不想搬出去住，更不想自己动手盖房子，又不能不听妈妈的话。于是，他们开始琢磨什么样的房子。老大先动手了。他首先扛来许多稻草，选择了一片空地，在中间搭了一座简易的稻草屋，然后用草绳捆了捆。\"哈哈!我有自己的房子了!\"老大乐得欢蹦乱跳。第二天老大搬进了自己的新家，老二和老三好奇地前来参观。老二说\:\"老三，你看大哥的房子，也太简陋了，我要盖一座又漂亮、又舒适的房子!\"\n老二跑到山上砍下许多木头回来，锯成木板、木条，叮叮当当地敲个不停。不久，老二也盖好了自己的木房子。显然这比老大的要漂亮、结实得多。老二很快搬到自己的新家住了，老大和老三也过来参观。老大赞不绝口，深感自己的房子过于简陋;老三看后说\:\"我盖的房子还会更好的。\"老三回到家左思右想，终于决定建造一栋用砖石砌成的房子，因为这种房子非常坚固，不怕风吹雨打，可这需要付出许多努力啊!老三每天起早贪黑，一趟一趟地搬回一块一块的石头，堆在一旁，再一块一块地砌成一面面墙。哥哥们在一旁取笑道\:\"只有傻瓜才会这么做!\"小弟毫不理会，仍夜以继日地工作。哥哥们休息了，他还在不停地干。这样整整过了三个月，老三的新房子也盖好了!他好高兴啊!有一天来了一只大野狼。老大惊慌地躲进了他的稻草屋。野狼\"嘿嘿\"地冷笑了两声，狠狠吹了口气就把稻草屋吹倒了。老大只好撒腿就跑。\n老大径直跑到二弟家，边跑边喊\:\"二弟!快开门!救命啊!\"二弟打开门一看，一只大野狼追了过来，赶紧让大哥进了屋，关好门。大野狼追到门前停了下来，心想\:\"你们以为木头房子就能难住我吗?\"他一下一下地向大门撞去。\"哗啦\"一声，木头房子被撞倒了。兄弟俩又拼命逃到老三家，气喘吁吁地告诉老三所发生的一切。老三先关紧了门窗，然后胸有成竹地说\:\"别怕!没问题了!\"大野狼站在大门前，他知道房子里有三只小猪，可不知怎么才能进去。他只能重施旧技，对着房门呼呼吹气，结果无济于事。\n野狼有点急了，他又用力去撞。\"当\"的一声，野狼只觉得两眼直冒金星，再看房子，纹丝不动。野狼真的急了，转身去找了一把锤子。野狼憋足劲，挥起大铁锤敲了下去，没想到锤子把断了，锤子反弹回来，正砸在野狼的头上。\"疼死我了!\"野狼大叫。他真的无技可施了。野狼只好满脸堆笑地请三只小猪一起去郊游。三只小猪很聪明，也很团结。他们提前到郊外摘了许多苹果。不久，野狼来了。三只小猪按计划迅速爬到苹果树上。野狼迷惑不解地问\:\"你们到树上去干什么?\"老三回答说\:\"我们在吃苹果呢!你要不要来一个?\"野狼馋得直流口水，便满口答应了。老三摘了一个大苹果丢下去，苹果顺着山坡滚下好远，野狼在后面追，结果越跑越远。三只小猪趁机跑回了家。\n野狼气急败坏地返回来，他绕着房子转了一圈，最后爬上房顶，他想从烟囱溜进去。老三从窗口发现后，马上点起了火。野狼掉进火炉里，熏得够呛，整条尾巴都烧焦了。他嚎叫着夹着尾巴逃走了，再也不敢来找三只小猪的麻烦了。",
        category: "Level C",
    },

];

// Initial population of the book list with Category A books
bookList.style.display = "block";
populateBookList("Level A");

// // Add event listeners to category buttons
// categoryButtons.addEventListener("click", (event) => {
//     if (event.target.tagName === "BUTTON") {
//         const selectedCategory = event.target.textContent;
//         populateBookList(selectedCategory);
//     }
// });

// Function to populate the book list for a specific category
function populateBookList(category) {
    bookList.innerHTML = ""; // Clear the book list
    const filteredBooks = books.filter((book) => book.category === category);

    filteredBooks.forEach((book) => {
        const bookCover = document.createElement("img");
        bookCover.src = book.coverURL;
        bookCover.alt = book.title;
        bookCover.className = "book-cover";

        bookCover.addEventListener("click", () => {
            displayBookDetails(book);
        });

        bookList.appendChild(bookCover);
    });
}

// Function to display book details
function displayBookDetails(book) {
    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <img src="${book.coverURL}" alt="${book.title}" class="book-cover">
        <div id="categoryButtons" class="btn-group" role="group" aria-label="Basic example">
            <button id="play">Play</button>
            <button id="pause">Pause</button>
            <button id="restart">Restart</button>
        </div>
        <p id ="bookContent">${book.description}</p>
        <p id ="subtitle">&nbsp;</p>
    `;
    //  <p id ="bookContent">${book.description}</p>
    //add reading book details

    const bookContent = document.getElementById('bookContent');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const restartButton = document.getElementById('restart');
    let speechSynthesisUtterance;
    let highlightedTextNode = null;
    // var paused = 0;

    playButton.addEventListener('click', () => {
        if (speechSynthesisUtterance) {
            speechSynthesis.resume();
            return;
        }
        // const textNodes = getTextNodes(bookContent);
        var displayText = bookContent.innerText;
        const textNodes = displayText.split(/[。？！]+/); //use regular expression to split by both 。 and ？and ！
        speechSynthesisUtterance = new SpeechSynthesisUtterance();
        let currentIndex = 0;

        speechSynthesisUtterance.onend = () => {
            currentIndex++;
            if (currentIndex < textNodes.length) {
                startReading(textNodes[currentIndex]);
            } else {
                speechSynthesisUtterance = null;
            }
        };

        document.getElementById
        startReading(textNodes[currentIndex]);
    });

    pauseButton.addEventListener('click', () => {
        if (speechSynthesisUtterance) {
            speechSynthesis.pause();
        }
    });

    // // Switch between the Pause and Resume button
    // pauseButton.addEventListener('click', () => {
    //     if (speechSynthesisUtterance) {
    //         if (paused) {
    //             paused = 0;
    //             pauseButton.innerText = 'Resume';
    //             speechSynthesis.resume();
    //         }
    //         else {
    //             paused = 1;
    //             pauseButton.innerText = 'Pause';
    //             speechSynthesis.pause();
    //         }
    //     }
    // });

    restartButton.addEventListener('click', () => {
        if (speechSynthesisUtterance) {
            speechSynthesisUtterance = null;
            const textNodes = getTextNodes(bookContent);
            startReading(textNodes[0]);
        }
    });

    function startReading(node) {
        // highlightedTextNode = node;
        // highlightedTextNode.parentNode.replaceChild(
        //     document.createTextNode(node.textContent),
        //     highlightedTextNode
        // );
        // highlightedTextNode = bookContent.appendChild(highlightedTextNode);
        // var displayText = node.textContent;
        // var displayWords = displayText.split("");
        // global_displayWords = displayWords;
        //drawTextInBookContent(displayWords);


        document.getElementById('subtitle').innerText = node;
        speechSynthesisUtterance.text = node;
        speechSynthesisUtterance.lang = 'zh';
        speechSynthesisUtterance.rate = 1;
        speechSynthesis.cancel();
        speechSynthesis.speak(speechSynthesisUtterance);
        // utter = new SpeechSynthesisUtterance("你好");
        // utter.lang = 'zh'
        // speechSynthesis.cancel();
        // speechSynthesis.speak(utter);
    }

    // draw Book Content word by word
    function drawTextInBookContent(words_array) {
        console.log("test");
        var bookText = document.getElementById("bookContent");
        for (var i = 0; i < words_array.length; i++) {
            var html = '<span id="word_span_' + i + '">' + words_array[i] + '</span>';
            bookText.innerHTML += html;
        }
    }

    // Get Text from a Element    
    function getTextNodes(element) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }
        return textNodes;
    }

    bookDetails.style.display = "block";
    bookList.style.display = "none";
}
//End of displayBookDetails

// Function to hide the book details
function hideBookDetails() {
    const bookDetails = document.getElementById("bookDetails");

    if (bookDetails) {
        bookDetails.style.display = "none";
    }
}


// Add event listeners to category buttons
categoryButtons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        // Remove the "active" class from all buttons
        const buttons = categoryButtons.querySelectorAll("button");
        buttons.forEach((button) => {
            button.classList.remove("active");
        });

        // Call the hideBookDetails function to hide the book details
        hideBookDetails()

        bookList.style.display = "block";
        const selectedCategory = event.target.textContent;
        populateBookList(selectedCategory);

        // Add the "active" class to the selected button
        event.target.classList.add("active");
    }
});



// //----------------Read book ----------------------------
// // Add event listener to play button
// playButton.addEventListener('click', () => {
//     if (speechSynthesisUtterance) {
//         speechSynthesisUtterance.resume();
//         return;
//     }
//     const textNodes = getTextNodes(bookContent);
//     speechSynthesisUtterance = new SpeechSynthesisUtterance();
//     let currentIndex = 0;

//     speechSynthesisUtterance.onend = () => {
//         currentIndex++;
//         if (currentIndex < textNodes.length) {
//             startReading(textNodes[currentIndex]);
//         } else {
//             speechSynthesisUtterance = null;
//         }
//     };

//     startReading(textNodes[currentIndex]);
// });

// pauseButton.addEventListener('click', () => {
//     if (speechSynthesisUtterance) {
//         speechSynthesisUtterance.pause();
//     }
// });

// restartButton.addEventListener('click', () => {
//     if (speechSynthesisUtterance) {
//         speechSynthesisUtterance = null;
//         const textNodes = getTextNodes(bookContent);
//         startReading(textNodes[0]);
//     }
// });

// function startReading(node) {
//     highlightedTextNode = node;
//     highlightedTextNode.parentNode.replaceChild(
//         document.createTextNode(node.textContent),
//         highlightedTextNode
//     );
//     highlightedTextNode = bookContent.appendChild(highlightedTextNode);

//     speechSynthesisUtterance.text = node.textContent;
//     speechSynthesis.speak(speechSynthesisUtterance);
// }

// function getTextNodes(element) {
//     const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
//     const textNodes = [];
//     while (walker.nextNode()) {
//         textNodes.push(walker.currentNode);
//     }
//     return textNodes;
// }