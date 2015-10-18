/**
 * Created by Zoe on 15-10-17.
 */

module.exports = {
    "1" : {
        id : 1,
        htmlHistory : "Even before you accepted the task of bringing Vonotar to justice, preparations were being made for your voyage to " +
        "Kalte. The captain of the Sommlending warship Cardonal, having returned from a long Kaltersee patrol, was ordered to await " +
        "your arrival at Anskaven. During the night, food, ice equipment, and Kanu-dog teams were taken on board. The mission was " +
        "highly secret—only senior members of the crew were told the true nature of the voyage that lay ahead.\\r\\n The plan is to " +
        "set you ashore at Halle Bluff, drop anchor, and await your return. An élite team of trusted guides will lead you from the " +
        "bluff to Ikaya. Once inside the ice fortress, you are to hunt down and capture Vonotar, and then return with your guides " +
        "to the ship. Your mission must be accomplished within thirty days at most, for winter is closing in and no ship can " +
        "withstand the grip of the Kalte pack-ice. If you do not return in time, the captain will be forced to set sail without " +
        "you.\\r\\n For six days, the Cardonal sails across the stormy Kaltersee without running into a storm; but every day the " +
        "temperature steadily drops until a layer of ice covers the decks. On the morning of the seventh day, the snow-capped " +
        "island of Tola is sighted on the horizon. Soon after, a light wind rises from the east.\\r\\n At first, there appears to be " +
        "little danger, but within half an hour a furious blizzard is blowing, and all sight of land quickly vanishes in the " +
        "scudding drift. All day the furious gale rages. Tremendous winds slice the tops of the huge grey waves and water crashes " +
        "over the decks, masts, and rigging of the ship, freezing almost immediately into solid ice. The sides of the ship become " +
        "several feet thick with seawater. It is not until early evening that the weather clears, and although the wind still blows " +
        "strongly, the force of the gale is spent.",
        img : "/images/img_baknar.png",
        info : null,
        accessPages:[{pageId:160, condition: null}, {pageId:273, condition: null}]
    },


    "78" : {
        id : 78,
        htmlHistory : "Preparing yourself, you pull back the flap of the tent and quickly leave. The wind has become much stronger, " +
        "and it whips the fine snow into small eddies, obscuring your vision. A shadow to your right betrays the Baknar as it lopes " +
        "towards you. There is no time to evade its attack and you must fight the creature to the death.",
        info : {combatRound: 1, combatRatio: 4, randomNum: 3, enemyDamage: 7, enemyEndurance: 23, wolfDamage: 3, wolfEndurance: 24},
        accessPages:[{pageId:160, condition: null}, {pageId:273, condition: null}]
    },

    "134": {
        id: 134,
        htmlHistory:"The following morning, you awake at dawn to the welcome sight of Fenor preparing a hot breakfast." +
        "He passes you a steaming bowl, and you gratefully eat its contents. Then you begin loading the equipment onto the " +
        "sledges for today’s journey. It is a beautiful morning. The wind has dropped and the air is fresh and clear. " +
        "The Kanu-dogs are strong and eager to be off,and for most of the day the ice is smooth and the running easy. " +
        "By nightfall, you have reached Syem Island, a pinnacle of granite rising through the ice shelf to a height of " +
        "four hundred feet. You make camp to the leeward side of the island in order to avoid the worst of the night winds. " +
        "Pick a number from the Random Number Table.",
        info : {combatRound: 3, combatRatio: 4, randomNum: 3, enemyDamage: 7, enemyEndurance: 23, wolfDamage: 3, wolfEndurance: 24},
        accessPages:[{pageId:57, condition: [0,3]}, {pageId:88, condition: [4,6]}, {pageId:331, condition: [7,9]}]
    },

    "167": {
        id: 167,
        htmlHistory:"Le vent tombe peu à peu, l'atmosphère s'éclaircit et le Glacier de Viad se révèle alors dans toute sa " +
        "splendeur. La surface lisse de la glace ressemble à un tapis de neige étincelante incrustée de pierres de toutes les " +
        "couleurs : jaunes, violettes, bleues, vertes, orange, cramoisies; et les cristaux de glace brillent d'un tel éclat que " +
        "le plus somptueux bijou paraîtrait terne par comparaison. Le mur de glace s'élève à 250 mètres de hauteur et ne présente " +
        "pas d'obstacle à l'escalade, bien qu'il soit très escarpé. Le temps est beau, mais il vous faut presque une journée " +
        "entière pour grimper au sommet de la paroi de glace. Tout le matériel a été déchargé et monté là-haut où on l'arrime à " +
        "nouveau sur les traîneaux. Les chiens Kanu jouent entre eux en se battant, et vos provisions sont à tel point secouées " +
        "par l'escalade qu'elles se sont transformées à la fin de la journée en une infâme bouillie.\\r\\n Lorsque tout est enfin terminé, vous êtes épuisé. La nuit tombe et " +
        "vous décidez donc d'établir votre campement dans l'abri que vous offre une cuvette naturelle creusée dans la glace. " +
        "Vous avez sans nul doute bien mérité une bonne nuit de repos.\\r\\n Utilisez la Table de Hasard pour obtenir un chiffre.",
        info : {combatRound: 4, combatRatio: 4, randomNum: 3, enemyDamage: 7, enemyEndurance: 23, wolfDamage: 3, wolfEndurance: 24},
        accessPages:[{pageId:85, condition: [0,6]}, {pageId:300, condition: [7,9]}]
    }

};

