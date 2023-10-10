const part1 = ["my", "the"];
const part2 = ["great", "super"];
const part3 = ["website", "project"];

const input = input;

const generateDomainNames = () => {
  const domainNames = [];

  for (const p1 of part1) {
    for (const p2 of part2) {
      for (const p3 of part3) {
        const domainName = `${p1}${p2}${input}${p3}.com`;
        domainNames.push(domainName);
      }
    }
  }

  return domainNames;
};

const domainNameList = generateDomainNames();

console.log(domainNameList);
