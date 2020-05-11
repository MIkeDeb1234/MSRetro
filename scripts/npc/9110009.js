/*
        NPC Name:               Gachapon (Generic)
        Author:                 AngelSpirit
        Description:            Multi-purpose Gachapon NPC, built to be easily editable and adaptable.
*/
importPackage(java.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);

//Constants -- change these to suit your needs

//Set to false to disable this NPC.
var enabled = true;

//Whether or not to allow players to view the list of rewards.  Note that GM's may always see the reward list, regardless of this setting.
var showRewards = true;

//Whether or not to show the individual chances of obtaining items.  Only useful if "showRewards" is set to true.
var showRewardChances = true;

//Rewards, listed as (ItemID, Quantity, Weight).  Weights are relative, and do not have to add up to 100.
var rewards = Array(
    3010171,1,5,
    3010172,1,5,
    3010664,1,5,
    3010200,1,5,
    3010848,1,1,
    3012012,1,5,
//attack on titan
    3015010,1,1,
    3015091,1,5,
//Lucid Chair
    3015155,1,1,
//Aquarium Slime
    3015183,1,5,
//Ranmaru Chair
    3015195,1,1,
//Shark Slide
    3015215,1,3,
//Elephant Camera
    3015225,1,1,
//HappyDay Chair
    3015227,1,1,
//Targa Chair
    3015228,1,5,
//Scarlion Chair
    3015229,1,5,
//Thousand Sword
    3015245,1,5,
//Hungry Sun
    3015275,1,5,
//Spikes Chair
    3015279,1,1,
//Deer ice
    3015429,1,1,
//Bird Wings
    3015722,1,1
);

Constants = {
    //ItemID to use as the "ticket"
    Ticket : 5220010,
    //Number of free inventory slots the player must have in each tab -- do not set this lower than 1.
    FreeInventory : 2
};

// INTERNAL VARS
var status = -1;
var rewardItems = Array();
var rewardWeights = Array();
var rewardQuantity = Array();
var totalWeights = Array();
var rng = new Random();

function start(){
    if(enabled || cm.getPlayer().isGM()){
        //Split the reward items
        for(var i = 0; i < rewards.length; i++){
            if(i % 3 == 0){
                rewardItems.push(rewards[i]);
            } else if (i % 3 == 1) {
                rewardQuantity.push(rewards[i]);
            } else {
                rewardWeights.push(rewards[i]);
                //For each weight, generate the sum of all previous weights
                var total = 0;
                for(var k = 0; k < rewardWeights.length; k++){
                    total += rewardWeights[k];
                }
                totalWeights.push(total);
            }
        }
        action(1,0,0);
    } else {
        cm.sendOk("Something clicks inside the Gachapon, then it stops altogether.  It doesn't respond.\r\n#r(The Gachapon is currently disabled.)#k");
        cm.dispose();
        return;
    }
}

function action(mode, type, selection){
    if(mode == 1 && selection != 99){
        status++;
    } else {
        cm.dispose();
        return;
    }
    
    if(status == 0){
        cm.sendSimple(getMainMenu());
    } else {
        if(selection == 2){ //show rewards
            if(!showRewards && !cm.getPlayer().isGM()){
                cm.sendOk("#rReward showing has been disabled.#k\r\n#b#L99#Okay.#l#k");
                cm.dispose();
            } else {
                cm.sendOk("List of rewards for this gachapon: \r\n" + getRewardsDisplay() + "\r\n#b#L99#Okay.#l#k");
                cm.dispose();
            }
        } else { //use ticket
            if(checkInventorySpace()){
                if(cm.haveItem(Constants.Ticket, 1)){
                    cm.gainItem(Constants.Ticket, -1);
                    var reward = getRewardIndex();
                    cm.gainItem(rewardItems[reward], rewardQuantity[reward]);
                    cm.sendSimple(getRewardMessage(reward));
                } else {
                    cm.sendOk("You do not have a #d#v" + Constants.Ticket + "##z" + Constants.Ticket + "##k.\r\n#b#L99#Okay.#l#k");
                    cm.dispose();
                }
            } else {
                cm.sendOk("The Gachapon beeps once, then stops.  It doesn't respond.  #r(You must have " + Constants.FreeInventory + " free inventory slots in each tab.)#k\r\n#b#L99#Okay.#l#k");
                cm.dispose();
                return;
            }
        }
    }
}

function getMainMenu(){
    var retText = "The Gachapon emits a muffled (clunk) noise.\r\n#b";
    retText += "#L1#Use a #k#d#v" + Constants.Ticket + "##z" + Constants.Ticket + "##k#b#l\r\n";
    if(showRewards || cm.getPlayer().isGM()){
        retText += "#L2#Display the list of rewards.#l\r\n";
    }
    retText += "#L99#(Never mind...)#l\r\n";
    retText += "#k";
    return retText;
}

function getRewardMessage(reward){
    var retText = "The Gachapon beeps.  A series of unidentifiable noises follows, then an item rolls out into the reward slot.  You pick it up.\r\n";
    retText += "#rYou have gained the following:#k\r\n#d";
    retText += rewardQuantity[reward] + "x #v" + rewardItems[reward] + "##z" + rewardItems[reward] + "##k\r\n";
    retText += "You currently have #r" + getRemainingTickets() + "#k #z" + Constants.Ticket + "# remaining.\r\n";
    retText += "#b#L1#Use another ticket.#l\r\n";
    retText += "#L99#Stop using the Gachapon.#l#k\r\n";
    return retText;
}

function getRewardIndex(){
    //random # between 1 and the sum of all weights
    var weight = rng.nextInt(totalWeights[totalWeights.length - 1] + 1);
    var retIndex = 0;
    while(retIndex < totalWeights.length - 1){
        if(weight < totalWeights[retIndex + 1] && weight >= totalWeights[retIndex]){
            break;
        }
        retIndex++;
    }
    return retIndex;
}

//Check for slots in each tab
function checkInventorySpace(){
    for(var i = 1; i <= 5; i++){
        if(cm.getPlayer().getInventory(MapleInventoryType.getByType(i)).getNumFreeSlot() < Constants.FreeInventory){
            return false;
        }
    }
    return true;
}

function getInventoryType(itemID){
    return Math.floor(itemID / 1000000);
}

function getRemainingTickets(){
    return cm.getPlayer().getInventory(MapleInventoryType.getByType(getInventoryType(Constants.Ticket))).countById(Constants.Ticket);
}

function getRewardsDisplay(){
    var ret = "#r";
    for(var i = 0; i < rewardItems.length; i++){
        if(rewardQuantity[i] > 1){ //don't show the quantity if there's only one
            ret += rewardQuantity[i] + "x ";
        }
        ret += "#v" + rewardItems[i] + "##z" + rewardItems[i] + "# ";
        if(showRewardChances){
            ret += "#k#b(" + (rewardWeights[i] / totalWeights[totalWeights.length - 1] * 100).toFixed(3) + "%)#k#r";
        }
        ret += "\r\n";
    }
    ret += "#k";
    return ret;
} 