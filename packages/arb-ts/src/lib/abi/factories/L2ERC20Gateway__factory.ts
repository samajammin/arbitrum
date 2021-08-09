/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2ERC20Gateway } from '../L2ERC20Gateway'

export class L2ERC20Gateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2ERC20Gateway> {
    return super.deploy(overrides || {}) as Promise<L2ERC20Gateway>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2ERC20Gateway {
    return super.attach(address) as L2ERC20Gateway
  }
  connect(signer: Signer): L2ERC20Gateway__factory {
    return super.connect(signer) as L2ERC20Gateway__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2ERC20Gateway {
    return new Contract(address, _abi, signerOrProvider) as L2ERC20Gateway
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    inputs: [],
    name: 'beaconProxyFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cloneableProxyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'getUserSalt',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_beaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611b44806100206000396000f3fe6080604052600436106100c75760003560e01c806395fcea781161007a57806395fcea78146103de57806397881f8d146103f3578063a0c76a9614610408578063a7e28d48146104e1578063c05e6a9514610514578063c0c53b8b14610529578063d2ce7d651461056e578063f887ea4014610608576100c7565b8062aa3a9b146100cc578063015234ab146101a55780630f09eb51146101cc5780632db09c1c146101e15780632e567b3614610212578063569f26ff1461031d5780637b3a3c8b14610350575b600080fd5b3480156100d857600080fd5b506101a3600480360360a08110156100ef57600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561012f57600080fd5b82018360208201111561014157600080fd5b803590602001918460018302840111600160201b8311171561016257600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061061d945050505050565b005b3480156101b157600080fd5b506101ba610817565b60408051918252519081900360200190f35b3480156101d857600080fd5b506101ba61081d565b3480156101ed57600080fd5b506101f6610823565b604080516001600160a01b039092168252519081900360200190f35b6102a8600480360360a081101561022857600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561026a57600080fd5b82018360208201111561027c57600080fd5b803590602001918460018302840111600160201b8311171561029d57600080fd5b509092509050610832565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102e25781810151838201526020016102ca565b50505050905090810190601f16801561030f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561032957600080fd5b506101ba6004803603602081101561034057600080fd5b50356001600160a01b0316610e26565b6102a86004803603608081101561036657600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156103a057600080fd5b8201836020820111156103b257600080fd5b803590602001918460018302840111600160201b831117156103d357600080fd5b509092509050610e56565b3480156103ea57600080fd5b506101a3610e68565b3480156103ff57600080fd5b506101ba610edd565b34801561041457600080fd5b506102a8600480360360a081101561042b57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561046d57600080fd5b82018360208201111561047f57600080fd5b803590602001918460018302840111600160201b831117156104a057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f53945050505050565b3480156104ed57600080fd5b506101f66004803603602081101561050457600080fd5b50356001600160a01b03166110ca565b34801561052057600080fd5b506101f66110db565b34801561053557600080fd5b506101a36004803603606081101561054c57600080fd5b506001600160a01b0381358116916020810135821691604090910135166110ea565b6102a8600480360360c081101561058457600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156105ca57600080fd5b8201836020820111156105dc57600080fd5b803590602001918460018302840111600160201b831117156105fd57600080fd5b509092509050611164565b34801561061457600080fd5b506101f6611377565b333014610671576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b610683826001600160a01b0316611386565b6106d4576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b6106df85838661138c565b60006106e961081d565b5a039050805a1161072b5760405162461bcd60e51b815260040180806020018281038252602b815260200180611ae4602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156107a8578181015183820152602001610790565b50505050905090810190601f1680156107d55780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b1580156107f657600080fd5b5087f115801561080a573d6000803e3d6000fd5b5050505050505050505050565b60025481565b6109c490565b6000546001600160a01b031681565b606061083d33611409565b610889576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060808484604081101561089c57600080fd5b810190602081018135600160201b8111156108b657600080fd5b8201836020820111156108c857600080fd5b803590602001918460018302840111600160201b831117156108e957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561093b57600080fd5b82018360208201111561094d57600080fd5b803590602001918460018302840111600160201b8311171561096e57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509799509297506109b895508f945061141d9350505050565b90506109cc816001600160a01b0316611386565b610a055760006109e08b838c8c8c896114ba565b90508015610a035760405180602001604052806000815250945050505050610e1c565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b60208310610a6b5780518252601f199092019160209182019101610a4c565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610acb576040519150601f19603f3d011682016040523d82523d6000602084013e610ad0565b606091505b50915091506000821580610ae5575060208251105b15610af257506001610b21565b6000610aff83600c611662565b90508d6001600160a01b0316816001600160a01b031614610b1f57600191505b505b8015610b6157610b438d308e8d604051806020016040528060008152506116c2565b50604051806020016040528060008152509650505050505050610e1c565b50508251159050610d5b576000306001600160a01b031662aa3a9b838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c1b578181015183820152602001610c03565b50505050905090810190601f168015610c485780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610c6b57600080fd5b505af1925050508015610c7c575060015b610c9057610c8b828b8a61138c565b610c94565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d19578181015183820152602001610d01565b50505050905090810190601f168015610d465780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610d66565b610d6681898961138c565b806001600160a01b0316886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040518060200160405280600081525093505050505b9695505050505050565b604080516001600160a01b0383166020808301919091528251808303820181529183019092528051910120919050565b6060610e1c8686866000808888611164565b6001546001600160a01b031615610eb5576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b031916735288c571fd7ad117bea99bf60fe0846c4e84f933179055565b600354604080516397881f8d60e01b815290516000926001600160a01b0316916397881f8d916004808301926020929190829003018186803b158015610f2257600080fd5b505afa158015610f36573d6000803e3d6000fd5b505050506040513d6020811015610f4c57600080fd5b5051905090565b6060632e567b3660e01b86868686600254876040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fab578181015183820152602001610f93565b50505050905090810190601f168015610fd85780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808b16602484019081528a8216604485015290891660648401526084830188905260a060a48401908152825160c48501528251929750909550935060e49091019150602085019080838360005b8381101561105757818101518382015260200161103f565b50505050905090810190601f1680156110845780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b60006110d58261141d565b92915050565b6003546001600160a01b031681565b6110f483836116dc565b6001600160a01b038116611140576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b03929092169190911790555050565b606034156111a4576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b600060606111e785858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506116ea92505050565b915091506000806111f78c61141d565b905061120b816001600160a01b0316611386565b611251576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b61125c81858c6117dd565b6112698c858d8d876116c2565b915050600260008154809291906001019190505550808a6001600160a01b0316846001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88e8d8760405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156113125781810151838201526020016112fa565b50505050905090810190601f16801561133f5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a46040805160208082019390935281518082039093018352810190529a9950505050505050505050565b6001546001600160a01b031681565b3b151590565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156113ec57600080fd5b505af1158015611400573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b0390811691161490565b6003546000906001600160a01b031663e75b21413061143b85610e26565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060206040518083038186803b15801561148857600080fd5b505afa15801561149c573d6000803e3d6000fd5b505050506040513d60208110156114b257600080fd5b505192915050565b6000806114c688610e26565b600354604080516329a5c5cf60e01b81526004810184905290519293506000926001600160a01b03909216916329a5c5cf9160248082019260209290919082900301818787803b15801561151957600080fd5b505af115801561152d573d6000803e3d6000fd5b505050506040513d602081101561154357600080fd5b505160408051630c4edbe960e11b81526001600160a01b038c811660048301908152602483019384528851604484015288519495509085169363189db7d2938e938a9392606490910190602085019080838360005b838110156115b0578181015183820152602001611598565b50505050905090810190601f1680156115dd5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b1580156115fd57600080fd5b505af1158015611611573d6000803e3d6000fd5b50505050876001600160a01b0316816001600160a01b0316141561163a57600092505050610e1c565b61165689308988604051806020016040528060008152506116c2565b50600192505050610e1c565b600081601401835110156116b2576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b6000610e1c8560006116d78989898989610f53565b61183d565b6116e68282611860565b5050565b600060606116f73361186a565b156117d25782806020019051604081101561171157600080fd5b815160208301805160405192949293830192919084600160201b82111561173757600080fd5b90830190602082018581111561174c57600080fd5b8251600160201b81118282018810171561176557600080fd5b82525081516020918201929091019080838360005b8381101561179257818101518382015260200161177a565b50505050905090810190601f1680156117bf5780820380516001836020036101000a031916815260200191505b50604052509294509092506117d8915050565b50339050815b915091565b826001600160a01b03166374f4f54783836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156113ec57600080fd5b6000805461185890849086906001600160a01b03168561187e565b949350505050565b6116e68282611a17565b6001546001600160a01b0390811691161490565b604080516349460b4d60e11b81526001600160a01b0384166004820190815260248201928352835160448301528351600093849360649363928c169a938b938a938a93929088019060208501908083838d5b838110156118e85781810151838201526020016118d0565b50505050905090810190601f1680156119155780820380516001836020036101000a031916815260200191505b5093505050506020604051808303818588803b15801561193457600080fd5b505af1158015611948573d6000803e3d6000fd5b50505050506040513d602081101561195f57600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808a1694908b16937f2b986d32a0536b7e19baa48ab949fec7b903b7fad7730820b20632d100cc3a68938a93919283929083019185019080838360005b838110156119d45781810151838201526020016119bc565b50505050905090810190601f168015611a015780820380516001836020036101000a031916815260200191505b509250505060405180910390a495945050505050565b6001600160a01b038216611a68576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611ab5576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905556fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a26469706673582212206c7cdc90e80e824fe84878d458da49dbcf31fa96b5206f57c1e2f50e7e0664e464736f6c634300060b0033'
