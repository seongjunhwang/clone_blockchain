import * as Cryptojs from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static caculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => Cryptojs.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number,
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

Block.caculateBlockHash

const genesisBlock:Block = new Block(0, "1231248216182", "", "hello", 123455 );

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string) : Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.caculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);    
    return newBlock;    
    };

console.log(createNewBlock("hello"), createNewBlock("bye"));

export {};
