const events = require('events');
const fs = require('fs');
const readline = require('readline');
const regexID = /\w{18}/g;

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('mc_dresser_EXAMPLE.cfg'),
      crlfDelay: Infinity
    });
    //real file path is something like: '/Users/username/Documents/Electronic Arts/The Sims 4/Mods/McCmdCenter_AllModules_2022_7_0/mc_dresser.cfg'

    rl.on('line', (line) => {
        const regexID = /\w{18}/g;
        console.log(line.match(regexID));
        var arr = line.match(regexID);
        function join(arr) {
            return [...new Set(arr)];
        }
        fs.appendFile('IDsFromDresserTest.txt', "\n" + arr.join("\n"), err => { 
            if (err) {
                console.error(err);
            }
        });
      });
  
      await events.once(rl, 'close');
  
      console.log('Reading file line by line with readline done.');
    } catch (err) {
      console.error(err);
    }
  })();
