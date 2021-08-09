/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { StakedLiquidityProvider } from '../StakedLiquidityProvider'

export class StakedLiquidityProvider__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _tokenBridge: string,
    _confirmRoots: string,
    _trustedStaker: string,
    overrides?: Overrides
  ): Promise<StakedLiquidityProvider> {
    return super.deploy(
      _tokenBridge,
      _confirmRoots,
      _trustedStaker,
      overrides || {}
    ) as Promise<StakedLiquidityProvider>
  }
  getDeployTransaction(
    _tokenBridge: string,
    _confirmRoots: string,
    _trustedStaker: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenBridge,
      _confirmRoots,
      _trustedStaker,
      overrides || {}
    )
  }
  attach(address: string): StakedLiquidityProvider {
    return super.attach(address) as StakedLiquidityProvider
  }
  connect(signer: Signer): StakedLiquidityProvider__factory {
    return super.connect(signer) as StakedLiquidityProvider__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakedLiquidityProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakedLiquidityProvider
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenBridge',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_confirmRoots',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_trustedStaker',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'fee_div',
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
    inputs: [],
    name: 'owner',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'liquidityProof',
        type: 'bytes',
      },
    ],
    name: 'requestLiquidity',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051610d35380380610d358339818101604052606081101561003357600080fd5b508051602082015160409092015190919060006100576001600160e01b0361016e16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b038086166001600160a01b03199283161790925560028054858416921691909117908190556040805163cb23bcb560e01b81529051919092169163cb23bcb5916004808301926020929190829003018186803b15801561010b57600080fd5b505afa15801561011f573d6000803e3d6000fd5b505050506040513d602081101561013557600080fd5b5051600380546001600160a01b039283166001600160a01b03199182161790915560048054939092169216919091179055506101729050565b3390565b610bb4806101816000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806327f1c8d614610067578063715018a6146100815780638da5cb5b1461008b578063effc168b146100af578063f2fde38b146101b7578063ffb409e9146101dd575b600080fd5b61006f610213565b60408051918252519081900360200190f35b610089610218565b005b6100936102c4565b604080516001600160a01b039092168252519081900360200190f35b610142600480360360a08110156100c557600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561010457600080fd5b82018360208201111561011657600080fd5b803590602001918460018302840111600160201b8311171561013757600080fd5b5090925090506102d3565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017c578181015183820152602001610164565b50505050905090810190601f1680156101a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610089600480360360208110156101cd57600080fd5b50356001600160a01b031661071c565b610089600480360360608110156101f357600080fd5b506001600160a01b0381358116916020810135909116906040013561081e565b606481565b61022061095c565b6001600160a01b03166102316102c4565b6001600160a01b03161461027a576040805162461bcd60e51b81526020600482018190526024820152600080516020610b5f833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6001546060906001600160a01b03163314610322576040805162461bcd60e51b815260206004820152600a6024820152694e4f545f42524944474560b01b604482015290519081900360640190fd5b600060606000806000878760a081101561033b57600080fd5b81359190810190604081016020820135600160201b81111561035c57600080fd5b82018360208201111561036e57600080fd5b803590602001918460208302840111600160201b8311171561038f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920182905250979c50929a5050823598505050602081013595506040013593506103ea91508b90508e8e8e8787610960565b9050600061041f8686846040516020018082815260200191505060405160208183030381529060405280519060200120610a6a565b600254604080516397a06bf760e01b815260048101849052602481018b905290519293506001600160a01b03909116916397a06bf791604480820192602092909190829003018186803b15801561047557600080fd5b505afa158015610489573d6000803e3d6000fd5b505050506040513d602081101561049f57600080fd5b50516104e1576040805162461bcd60e51b815260206004820152600c60248201526b1253959053125117d493d3d560a21b604482015290519081900360640190fd5b60035460408051634f0f4aa960e01b8152600481018a905290516001600160a01b0390921691634f0f4aa991602480820192602092909190829003018186803b15801561052d57600080fd5b505afa158015610541573d6000803e3d6000fd5b505050506040513d602081101561055757600080fd5b505160048054604080516348b4573960e11b81526001600160a01b039283169381019390935251921691639168ae7291602480820192602092909190829003018186803b1580156105a757600080fd5b505afa1580156105bb573d6000803e3d6000fd5b505050506040513d60208110156105d157600080fd5b5051610612576040805162461bcd60e51b815260206004820152600b60248201526a1393d517d5149554d5115160aa1b604482015290519081900360640190fd5b5050600060648b8161062057fe5b0490508b6001600160a01b031663a9059cbb8e838e036040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561068557600080fd5b505af1158015610699573d6000803e3d6000fd5b505050506040513d60208110156106af57600080fd5b50516106fc576040805162461bcd60e51b8152602060048201526017602482015276494e53554646494349454e545f4c49515549444954495960481b604482015290519081900360640190fd5b50506040805160208101909152600081529b9a5050505050505050505050565b61072461095c565b6001600160a01b03166107356102c4565b6001600160a01b03161461077e576040805162461bcd60e51b81526020600482018190526024820152600080516020610b5f833981519152604482015290519081900360640190fd5b6001600160a01b0381166107c35760405162461bcd60e51b8152600401808060200182810382526026815260200180610b396026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b61082661095c565b6001600160a01b03166108376102c4565b6001600160a01b031614610880576040805162461bcd60e51b81526020600482018190526024820152600080516020610b5f833981519152604482015290519081900360640190fd5b816001600160a01b031663a9059cbb84836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156108e057600080fd5b505af11580156108f4573d6000803e3d6000fd5b505050506040513d602081101561090a57600080fd5b5051610957576040805162461bcd60e51b8152602060048201526017602482015276494e53554646494349454e545f4c49515549444954495960481b604482015290519081900360640190fd5b505050565b3390565b60408051602481018890526001600160a01b0380881660448301528616606482015260848082018690528251808303909101815260a49091018252602081810180516001600160e01b031663e0a345fd60e01b1781528351600092810183815233958201869052606082018690526080820188905260a0820187905260c08201849052845193958694909384938a938a9388938a9360e001918083835b60208310610a1c5780518252601f1990920191602091820191016109fd565b6001836020036101000a038019825116818451168082178552505050505050905001975050505050505050604051602081830303815290604052805190602001209150509695505050505050565b8251600090610100811115610a7e57600080fd5b8260005b82811015610b2e5760028606610adb57868181518110610a9e57fe5b6020026020010151826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209150610b20565b81878281518110610ae857fe5b602002602001015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b600286049550600101610a82565b509594505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220885d93746c0395a78ef35297d8e099b62ee7c10c9f0f67f2b1c354328d46297064736f6c634300060b0033'
