// This is how you require other files.
const Fishes = require('../../fishes.json');
// This is for Embeds to make things look fancier.
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'fish',
    category: 'Fishing',
    description: 'Fish for a fish',
    run: async (bot, message, args) => {

        let FishInfo = Fishes.fishes;

        let amount = parseInt(args[0]);
        if (!amount) return message.reply('Please enter the amount of times you would like to fish.');
        if (amount > 10) return message.reply("You can only fish up to 10 times.")
        if (amount < 0) return message.reply("Yes you can fish negative times..")

        try {
            if (amount && amount <= 10) {
                for (let i = 0; i < amount; i++) {
                    var Rarity = randomNumber(1, 100);

                    // Common Fish Loop with a range of 1-40 (40%)
                    if (Rarity > 0 && Rarity < 41) {
                        var CommonID = randomNumber(1, 20);

                        for (let j = 1; j < 20; ++j) {
                            if (CommonID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("#f6f6f6")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                    // Uncommon Fish Loop with a range of 41-63 (23%)
                    if (Rarity > 40 && Rarity < 64) {
                        var UncommonID = randomNumber(21, 20);

                        for (let j = 21; j < 40; ++j) {
                            if (UncommonID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("GREEN")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                    // Rare Fish Loop with a range of 64-76 (13%)
                    if (Rarity > 63 && Rarity < 77) {
                        var RareID = randomNumber(41, 20);

                        for (let j = 41; j < 60; ++j) {
                            if (RareID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("BLUE")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                    // Unique Fish Loop with a range of 77-86 (10%)
                    if (Rarity > 76 && Rarity < 87) {
                        var UniqueID = randomNumber(61, 20);

                        for (let j = 61; j < 80; ++j) {
                            if (UniqueID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("#FFFF00")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                    // Epic Fish Loop with a range of 87-93 (7%)
                    if (Rarity > 86 && Rarity < 94) {
                        var EpicID = randomNumber(81, 20);

                        for (let j = 81; j < 110; ++j) {
                            if (EpicID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("#FF8C00")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                    // Wicked Fish Loop with a range of 94-97 (4%)
                    if (Rarity > 93 && Rarity < 96) {
                        var WickedID = randomNumber(101, 20);

                        for (let j = 101; j < 120; ++j) {
                            if (WickedID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("#FF0000")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                    // Legendary Fish Loop with a range of 98-99 (2%)
                    if (Rarity > 97 && Rarity < 100) {
                        var LegendaryID = randomNumber(121, 20);

                        for (let j = 121; j < 140; ++j) {
                            if (LegendaryID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("#9400D3")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                    // Mythical Fish Loop with a range of 100 (1%)
                    if (Rarity == 100) {
                        var MythicalID = randomNumber(141, 20);

                        for (let j = 141; j < 160; ++j) {
                            if (MythicalID === FishInfo[j].PrimeID) {
                                message.channel.send(new MessageEmbed()
                                    .setColor("#008080")
                                    .setDescription(`
                            **Name**: ${FishInfo[j].Name}
                            **Rarity**: ${FishInfo[j].Rarity}
                            **Difficulty**: ${FishInfo[j].Difficulty}
                            **Requirement**: ${FishInfo[j].Requirement}`))
                            }
                        }
                    }

                }
            }
        } catch (e) { message.channel.send(`Something went wrong..\n\`\`\`js\n${e}\`\`\``) }
    }
}

let randomNumber = function(start, range) {
    let getRarity = Math.floor((Math.random() * range) + start);
    return getRarity;
}
