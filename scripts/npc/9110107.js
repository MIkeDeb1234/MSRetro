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
/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Hotel Receptionist - Sleepywood Hotel(105040400)
-- By ---------------------------------------------------------------------------------------------
	Unknown
-- Version Info -----------------------------------------------------------------------------------
        1.3 - More Cleanup by Moogra (12/17/09)
        1.2 - Cleanup and Statement fix by Moogra
	1.1 - Statement fix [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var regcost = 15000;
var vipcost = 15000;
var iwantreg = 0;

function start() {
    cm.sendNext("Welcome. Our transfer service works hard to serve you the best at all times. where would you like to Go?");
}

function action(mode, type, selection) {
    if (mode == -1 || (mode == 0 && status == 1))
        cm.dispose();
    else {
        if (mode == 0 && status == 2) {
            cm.sendNext("We offer other kinds of services, too, so please think carefully and then make your decision.");
            cm.dispose();
            return;
        }
        status++;
        if (status == 1) {
            cm.sendSimple("We offer two kinds of Transfers for our service. Please choose the one of your liking.\r\n#b#L0#Go to Ninja Castle (" + regcost + " mesos per use)#l\r\n#L1#Go To Shrine (" + vipcost + " mesos per use)#l");
            iwantreg = 1;
        } else if (status == 2) {
            if (selection == 0)
                cm.sendYesNo("You have chosen the Ninja Castle.Are you sure you want to go in there?");
            else if (selection == 1) {
                cm.sendYesNo("You've chosen Mushroom Shrine. Are you sure you want to go back?");
		iwantreg = 0;
            }
        } else if (status == 3) {
            if (iwantreg == 1) {
                if (cm.getMeso() >= regcost) {
                    cm.warp(800040000);
                    cm.gainMeso(-regcost);
                } else
                    cm.sendNext("I'm sorry. It looks like you don't have enough mesos. It will cost you at least " + regcost + "mesos to stay at our hotel.");
            } else {
                if (cm.getMeso() >= vipcost) {
                    cm.warp(800000000);
                    cm.gainMeso(-vipcost);
                } else
                    cm.sendNext("I'm sorry. It looks like you don't have enough mesos. It will cost you at least " + vipcost + "mesos to go to your destination.");
            }
            cm.dispose();
        }
    }
}