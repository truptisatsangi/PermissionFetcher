import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "networkId",
      message:
        "network id of the chain on which you want the events to be fetched",
    },
    {
      name: "contractAddress",
      message: "Address of the contract",
    },
    {
      name: "eventName",
      message: "name of the event whose logs has to be retrieved",
    },
    {
      name: "chunkSize",
      message:
        "Please enter the block chunk size for fetching the events. This is important as some RPCs fail to return logs for a large chunk of blocks",
      default: 40000,
    },
    {
      name: "startBlock",
      message:
        "Please enter starting block of given network from which you want the logs.",
    },
    {
      name: "endBlock",
      message:
        "Please enter ending block of given network till which you want the logs {optional}",
      default: "latest",
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.log(error);
  });
