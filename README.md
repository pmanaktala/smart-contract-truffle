# Smart-contract-truffle
An implementation of smart contract using truffle

## Part 1/4

[Link to the video](https://youtu.be/ZaqAwOzEiQ8) \

In this part, we learnt about creating a simple hello world smart contract 'sol; file. After that we created a migrations file. 
We learnt that the number infront of migration file specifies the order in which migration happens.
We migrated our hello world contract and then finally invoked it using the comandline.


## Part 1/4

[Link to the video](https://www.youtube.com/watch?v=TDDuLlOiYJ8) \

In this part we learnt how to use the constructors and setters to set the value of something after the deployment is done. Then we used the 'require'
method to ensure that we are using 1 ether for the transaction and also to ensure that only the owner is allowed to call the setter.

Finally we created another helloWorld.sol file and used the .then() method in javascript to deploy the second hello world after the first hello world
deployment is complete. We also created an instance to the first hello world, and used the value of the message variable to set the value while deploying
the second hello world in migration file.