/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
 *@Author:  Moogra
 *@NPC:     4th Job Mage Advancement NPC
 *@Purpose: Handles 4th job.
 */

var status;
 
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && status == 0) {
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;
    
                if(status == 0) {
                        if(cm.getLevel() < 120 || Math.floor(cm.getJobId() / 100) != 2) {
                                cm.sendOk("Please don't bother me right now, I am trying to concentrate.");
                                cm.dispose();
                        } else if (!cm.isQuestCompleted(6914)) {
                                cm.sendOk("You have not yet passed my trials. I can not advance you until you do so.");
                                cm.dispose();
                        } else if ( cm.getJobId() % 100 % 10 != 2) {
                                cm.sendYesNo("You did a marvellous job passing my test. Are you ready to advance to your 4th job?");
                        } else {
                                cm.sendOk("It is done. Leave me now.");
                                cm.dispose();
                        }
                } else if(status == 1) {
                        if (mode >= 1 && cm.getJobId() % 100 % 10 != 2) {
                                if (cm.canHold(2280003, 1)) {
                                        cm.changeJobById(cm.getJobId() + 1);
                                        if(cm.getJobId() == 212) {
                                                cm.teachSkill(2121001, 0, 10, -1);
                                                cm.teachSkill(2121002, 0, 10, -1);
                                                cm.teachSkill(2121006, 0, 10, -1);
                                        } else if(cm.getJobId() == 222) {
                                                cm.teachSkill(2221001, 0, 10, -1);
                                                cm.teachSkill(2221002, 0, 10, -1);
                                                cm.teachSkill(2221006, 0, 10, -1);
                                        } else if(cm.getJobId() == 232) {
                                                cm.teachSkill(2321001, 0, 10, -1);
                                                cm.teachSkill(2321002, 0, 10, -1);
                                                cm.teachSkill(2321005, 0, 10, -1);
                                        }
                                        cm.gainItem(2280003, 1);
                                } else {
                                        cm.sendOk("Please have one slot available on #bUSE#k inventory to receive a skill book.");
                                }
                           } else if( mode >= 1 && cm.getJobId() % 100 % 10 == 2) {
                                if(cm.getJobId() == 900) {
                                        if (cm.getPlayer().getSkillLevel(2321004) == 0)
                                                cm.teachSkill(2321004, 0, 10,-1); // Infinity 
                                } else if(cm.getJobId() == 900) {
                                        if(cm.getPlayer().getSkillLevel(2221007) == 0)
                                                cm.teachSkill(2221007 , 0, 10, -1);
                                        if(cm.getPlayer().getSkillLevel(2221005) == 0)
                                               cm.teachSkill(2221005 , 0, 10, -1);
                                        if(cm.getPlayer().getSkillLevel(2221003) == 0)
                                                cm.teachSkill(2221003 , 0, 10, -1);
                                } else if(cm.getJobId() == 900) {
                                        if (cm.getPlayer().getSkillLevel(2321004) > 0)
                                                cm.teachSkill(2321004, 0, 10,-1); // Infinity 
                                }
                                cm.sendOk("It is done. Leave me now.");
                        }
                        cm.dispose();
                }
        }
}