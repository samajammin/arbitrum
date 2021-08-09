/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1GatewayTester } from '../L1GatewayTester'

export class L1GatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1GatewayTester> {
    return super.deploy(overrides || {}) as Promise<L1GatewayTester>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayTester {
    return super.attach(address) as L1GatewayTester
  }
  connect(signer: Signer): L1GatewayTester__factory {
    return super.connect(signer) as L1GatewayTester__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayTester {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayTester
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
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'WhitelistSourceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
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
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
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
    inputs: [],
    name: 'inbox',
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
        name: '_l2Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_cloneableProxyHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_l2BeaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2BeaconProxyFactory',
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
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'parseInboundData',
    outputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_extraData',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
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
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_shouldUseInbox',
        type: 'bool',
      },
    ],
    name: 'setInboxUse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'updateWhitelistSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
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
  '0x608060405234801561001057600080fd5b50612b41806100206000396000f3fe6080604052600436106101295760003560e01c806395fcea78116100ab578063bcf2e6eb1161006f578063bcf2e6eb146106af578063bd5f3e7d14610722578063d2ce7d651461080d578063f68a9082146108a7578063f887ea401461096d578063fb0e722b1461098257610129565b806395fcea781461052657806397881f8d1461053b578063a01893bf14610550578063a0c76a96146105a3578063a7e28d481461067c57610129565b806347466f98116100f257806347466f98146103a357806369ec2bed146103d657806370fc045f1461040257806386ee20501461041757806393e59dc11461051157610129565b8062aa3a9b1461012e578063020a6058146102075780630f09eb51146102525780632db09c1c146102675780632e567b3614610298575b600080fd5b34801561013a57600080fd5b50610205600480360360a081101561015157600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561019157600080fd5b8201836020820111156101a357600080fd5b803590602001918460018302840111600160201b831117156101c457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610997945050505050565b005b34801561021357600080fd5b506102406004803603604081101561022a57600080fd5b50803590602001356001600160a01b0316610b91565b60408051918252519081900360200190f35b34801561025e57600080fd5b50610240610bc6565b34801561027357600080fd5b5061027c610bcd565b604080516001600160a01b039092168252519081900360200190f35b61032e600480360360a08110156102ae57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156102f057600080fd5b82018360208201111561030257600080fd5b803590602001918460018302840111600160201b8311171561032357600080fd5b509092509050610be1565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610368578181015183820152602001610350565b50505050905090810190601f1680156103955780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103af57600080fd5b50610205600480360360208110156103c657600080fd5b50356001600160a01b0316610f2a565b3480156103e257600080fd5b50610205600480360360208110156103f957600080fd5b50351515610fcd565b34801561040e57600080fd5b5061027c610fe0565b34801561042357600080fd5b506104926004803603602081101561043a57600080fd5b810190602081018135600160201b81111561045457600080fd5b82018360208201111561046657600080fd5b803590602001918460018302840111600160201b8311171561048757600080fd5b509092509050610fef565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156104d55781810151838201526020016104bd565b50505050905090810190601f1680156105025780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561051d57600080fd5b5061027c61109c565b34801561053257600080fd5b506102056110ab565b34801561054757600080fd5b50610240611142565b34801561055c57600080fd5b50610205600480360360a081101561057357600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160809091013516611148565b3480156105af57600080fd5b5061032e600480360360a08110156105c657600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561060857600080fd5b82018360208201111561061a57600080fd5b803590602001918460018302840111600160201b8311171561063b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611217945050505050565b34801561068857600080fd5b5061027c6004803603602081101561069f57600080fd5b50356001600160a01b031661156f565b3480156106bb57600080fd5b506106d9600480360360208110156106d257600080fd5b5035611582565b604080516001600160a01b0384168152602080820183815284519383019390935283519192916060840191850190808383600083156104d55781810151838201526020016104bd565b34801561072e57600080fd5b50610205600480360360a081101561074557600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b81111561077f57600080fd5b82018360208201111561079157600080fd5b803590602001918460018302840111600160201b831117156107b257600080fd5b919390929091602081019035600160201b8111156107cf57600080fd5b8201836020820111156107e157600080fd5b803590602001918460018302840111600160201b8311171561080257600080fd5b509092509050611636565b61032e600480360360c081101561082357600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561086957600080fd5b82018360208201111561087b57600080fd5b803590602001918460018302840111600160201b8311171561089c57600080fd5b50909250905061190f565b3480156108b357600080fd5b506106d9600480360360608110156108ca57600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b8111156108f957600080fd5b82018360208201111561090b57600080fd5b803590602001918460018302840111600160201b8311171561092c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506119f8945050505050565b34801561097957600080fd5b5061027c611b54565b34801561098e57600080fd5b5061027c611b63565b3330146109eb576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b6109fd826001600160a01b0316611b72565b610a4e576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610a59858386611b78565b6000610a63610bc6565b5a039050805a11610aa55760405162461bcd60e51b815260040180806020018281038252602b815260200180612ab7602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b22578181015183820152602001610b0a565b50505050905090810190601f168015610b4f5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610b7057600080fd5b5087f1158015610b84573d6000803e3d6000fd5b5050505050505050505050565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6175305b90565b60005461010090046001600160a01b031681565b600254606090600090610bfc906001600160a01b0316611b97565b9050610c0781611ba2565b610c53576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610c618686610fef565b91509150610c708289836119f8565b8051919950915015610e6b576000306001600160a01b031662aa3a9b8c8a8d8d876040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d2b578181015183820152602001610d13565b50505050905090810190601f168015610d585780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610d7b57600080fd5b505af1925050508015610d8c575060015b610da057610d9b8b8b8a611b78565b610da4565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b86604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e29578181015183820152602001610e11565b50505050905090810190601f168015610e565780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610e76565b610e768a8989611b78565b81886001600160a01b03168a6001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8d8b8b8b60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a4505060408051602081019091526000815298975050505050505050565b6006546001600160a01b03163314610f79576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015290519081900360640190fd5b600680546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac2274657779181900360200190a150565b6000805460ff1916911515919091179055565b6005546001600160a01b031681565b600060608383604081101561100357600080fd5b81359190810190604081016020820135600160201b81111561102457600080fd5b82018360208201111561103657600080fd5b803590602001918460018302840111600160201b8311171561105757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b6006546001600160a01b031681565b6006546001600160a01b0316156110f8576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b03199081167372ce9c846789fdb6fc1f34ac4ad25dd9ef7031ef179091556006805490911673d485e5c28aa4985b23f6df13da03caa766dcd459179055565b60045481565b611153858585611bbb565b81611199576040805162461bcd60e51b81526020600482015260116024820152700929cac82989288bea0a49eb0b29082a69607b1b604482015290519081900360640190fd5b6001600160a01b0381166111e5576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600491909155600580546001600160a01b039092166001600160a01b0319928316179055600680549091169055505050565b60608061122b876306fdde0360e01b611bc6565b61123c886395d89b4160e01b611bc6565b61124d8963313ce56760e01b611bc6565b60405160200180806020018060200180602001848103845287818151815260200191508051906020019080838360005b8381101561129557818101518382015260200161127d565b50505050905090810190601f1680156112c25780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b838110156112f55781810151838201526020016112dd565b50505050905090810190601f1680156113225780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b8381101561135557818101518382015260200161133d565b50505050905090810190601f1680156113825780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040529050632e567b3660e01b878787878588604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b838110156113ee5781810151838201526020016113d6565b50505050905090810190601f16801561141b5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561144e578181015183820152602001611436565b50505050905090810190601f16801561147b5780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808c16602484019081528b82166044850152908a1660648401526084830189905260a060a48401908152825160c48501528251929850909650945060e4909101925060208601915080838360005b838110156114fb5781810151838201526020016114e3565b50505050905090810190601f1680156115285780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b600061157a82611ca2565b90505b919050565b6003602090815260009182526040918290208054600180830180548651600261010094831615949094026000190190911692909204601f81018690048602830186019096528582526001600160a01b0390921694929390929083018282801561162c5780601f106116015761010080835404028352916020019161162c565b820191906000526020600020905b81548152906001019060200180831161160f57829003601f168201915b5050505050905082565b60006116528888604051806020016040528060008152506119f8565b509050336001600160a01b038216146116a8576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b6116ea88888888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cd392505050565b811561185257611702866001600160a01b0316611b72565b611745576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b1580156117db57600080fd5b505af11580156117ef573d6000803e3d6000fd5b505050506040513d602081101561180557600080fd5b5051905080611850576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b6006546060906001600160a01b0316156119dd576006546040805163babcc53960e01b815233600482015290516001600160a01b039092169163babcc53991602480820192602092909190829003018186803b15801561196e57600080fd5b505afa158015611982573d6000803e3d6000fd5b505050506040513d602081101561199857600080fd5b50516119dd576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d5d2125511531254d51151608a1b604482015290519081900360640190fd5b6119ec88888888888888611d46565b98975050505050505050565b600060606000611a088686610b91565b9050611a126129e0565b6000828152600360209081526040918290208251808401845281546001600160a01b03168152600180830180548651600261010094831615949094026000190190911692909204601f8101869004860283018601909652858252919492938581019391929190830182828015611ac95780601f10611a9e57610100808354040283529160200191611ac9565b820191906000526020600020905b815481529060010190602001808311611aac57829003601f168201915b5050509190925250508151919250506001600160a01b031660011415611b27576040805162461bcd60e51b815260206004820152600e60248201526d1053149150511657d1561255115160921b604482015290519081900360640190fd5b80516001600160a01b031615611b3e578051611b40565b855b602090910151909350915050935093915050565b6001546001600160a01b031681565b6002546001600160a01b031681565b3b151590565b611b926001600160a01b038416838363ffffffff611f2316565b505050565b600061157a82611f75565b60005461010090046001600160a01b0390811691161490565b611b92838383611f98565b60408051600481526024810182526020810180516001600160e01b03166001600160e01b031985161781529151815160609360009385936001600160a01b03891693919290918291908083835b60208310611c325780518252601f199092019160209182019101611c13565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114611c92576040519150601f19603f3d011682016040523d82523d6000602084013e611c97565b606091505b509695505050505050565b600080611cae83612055565b600454600554919250611ccc918391906001600160a01b03166120b2565b9392505050565b6000611cdf8585610b91565b6040805180820182526001600160a01b038681168252602080830187815260008681526003835294909420835181546001600160a01b03191693169290921782559251805194955091939092611d3c9260018501929101906129f8565b5050505050505050565b606060008060006060611d8e87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061210d92505050565b91955092509050611da76001600160a01b038d16611b72565b611dea576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000611df58d611ca2565b90506001600160a01b038116611e44576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015290519081900360640190fd5b611e4f8d868d6122d3565b611e5f8d868e8e8e8e89896122ee565b935050505080896001600160a01b0316836001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88d8c8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040805160208082019390935281518082039093018352810190529998505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611b92908490612318565b6000805460ff1615611f9157611f8a826123c9565b905061157d565b503361157d565b611fa2838361255a565b6001600160a01b038216611fea576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116612031576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b600054604080516001600160a01b03938416602080830191909152825180830382018152828401845280519082012061010090940490941660608201526080808201939093528151808203909301835260a0019052805191012090565b604080516001600160f81b031960208083019190915260609390931b6bffffffffffffffffffffffff191660218201526035810194909452605580850193909352805180850390930183526075909301909252805191012090565b600080606061211b33612568565b156121f65783806020019051604081101561213557600080fd5b815160208301805160405192949293830192919084600160201b82111561215b57600080fd5b90830190602082018581111561217057600080fd5b8251600160201b81118282018810171561218957600080fd5b82525081516020918201929091019080838360005b838110156121b657818101518382015260200161219e565b50505050905090810190601f1680156121e35780820380516001836020036101000a031916815260200191505b50604052509295509092506121fc915050565b50339150825b80806020019051604081101561221157600080fd5b815160208301805160405192949293830192919084600160201b82111561223757600080fd5b90830190602082018581111561224c57600080fd5b8251600160201b81118282018810171561226557600080fd5b82525081516020918201929091019080838360005b8381101561229257818101518382015260200161227a565b50505050905090810190601f1680156122bf5780820380516001836020036101000a031916815260200191505b506040525095979296509094509092505050565b611b926001600160a01b03841683308463ffffffff61257c16565b600061230b8860008588886123068f8f8f8f8c611217565b6125dc565b9998505050505050505050565b606061236d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166126129092919063ffffffff16565b805190915015611b925780806020019051602081101561238c57600080fd5b5051611b925760405162461bcd60e51b815260040180806020018281038252602a815260200180612ae2602a913960400191505060405180910390fd5b600080826001600160a01b031663e78cea926040518163ffffffff1660e01b815260040160206040518083038186803b15801561240557600080fd5b505afa158015612419573d6000803e3d6000fd5b505050506040513d602081101561242f57600080fd5b50516040805163ab5d894360e01b815290516001600160a01b039092169163ab5d894391600480820192602092909190829003018186803b15801561247357600080fd5b505afa158015612487573d6000803e3d6000fd5b505050506040513d602081101561249d57600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b1580156124e557600080fd5b505afa1580156124f9573d6000803e3d6000fd5b505050506040513d602081101561250f57600080fd5b505190506001600160a01b038116611ccc576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b6125648282612629565b5050565b6001546001600160a01b0390811691161490565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526125d6908590612318565b50505050565b600254600080549091612607916001600160a01b039182169161010090910416898989898989612704565b979650505050505050565b60606126218484600085612716565b949350505050565b6001600160a01b03821661267a576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b60005461010090046001600160a01b0316156126cc576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b0394851602179055600180546001600160a01b03191691909216179055565b600061230b8989898989898989612867565b6060824710156127575760405162461bcd60e51b8152600401808060200182810382526026815260200180612a916026913960400191505060405180910390fd5b61276085611b72565b6127b1576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106127f05780518252601f1990920191602091820191016127d1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612852576040519150601f19603f3d011682016040523d82523d6000602084013e612857565b606091505b509150915061260782828661293c565b6000806060896001600160a01b031688856040518082805190602001908083835b602083106128a75780518252601f199092019160209182019101612888565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612909576040519150601f19603f3d011682016040523d82523d6000602084013e61290e565b606091505b5091509150816000811461292157612929565b815160208301fd5b506105399b9a5050505050505050505050565b6060831561294b575081611ccc565b82511561295b5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129a557818101518382015260200161298d565b50505050905090810190601f1680156129d25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60408051808201909152600081526060602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612a3957805160ff1916838001178555612a66565b82800160010185558215612a66579182015b82811115612a66578251825591602001919060010190612a4b565b50612a72929150612a76565b5090565b610bca91905b80821115612a725760008155600101612a7c56fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220faad8df8d275eef85cf4a1b924a9c43e35cfe65cbbc97e68ebc71d275a0159a264736f6c634300060b0033'
