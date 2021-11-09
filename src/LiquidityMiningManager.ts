/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
    ethers,
    EventFilter,
    Signer,
    BigNumber,
    BigNumberish,
    PopulatedTransaction,
    BaseContract,
    ContractTransaction,
    Overrides,
    CallOverrides,
  } from "ethers";
  import { BytesLike } from "@ethersproject/bytes";
  import { Listener, Provider } from "@ethersproject/providers";
  import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
  import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";
  
  export interface LiquidityMiningManagerInterface extends ethers.utils.Interface {
    functions: {
      "DEFAULT_ADMIN_ROLE()": FunctionFragment;
      "GOV_ROLE()": FunctionFragment;
      "MAX_POOL_COUNT()": FunctionFragment;
      "REWARD_DISTRIBUTOR_ROLE()": FunctionFragment;
      "TOKEN_SAVER_ROLE()": FunctionFragment;
      "addPool(address,uint256)": FunctionFragment;
      "adjustWeight(uint256,uint256)": FunctionFragment;
      "distributeRewards()": FunctionFragment;
      "getPools()": FunctionFragment;
      "getRoleAdmin(bytes32)": FunctionFragment;
      "getRoleMember(bytes32,uint256)": FunctionFragment;
      "getRoleMemberCount(bytes32)": FunctionFragment;
      "grantRole(bytes32,address)": FunctionFragment;
      "hasRole(bytes32,address)": FunctionFragment;
      "lastDistribution()": FunctionFragment;
      "poolAdded(address)": FunctionFragment;
      "pools(uint256)": FunctionFragment;
      "removePool(uint256)": FunctionFragment;
      "renounceRole(bytes32,address)": FunctionFragment;
      "revokeRole(bytes32,address)": FunctionFragment;
      "reward()": FunctionFragment;
      "rewardPerSecond()": FunctionFragment;
      "rewardSource()": FunctionFragment;
      "saveToken(address,address,uint256)": FunctionFragment;
      "setRewardPerSecond(uint256)": FunctionFragment;
      "supportsInterface(bytes4)": FunctionFragment;
      "totalWeight()": FunctionFragment;
    };
  
    encodeFunctionData(
      functionFragment: "DEFAULT_ADMIN_ROLE",
      values?: undefined
    ): string;
    encodeFunctionData(functionFragment: "GOV_ROLE", values?: undefined): string;
    encodeFunctionData(
      functionFragment: "MAX_POOL_COUNT",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "REWARD_DISTRIBUTOR_ROLE",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "TOKEN_SAVER_ROLE",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "addPool",
      values: [string, BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "adjustWeight",
      values: [BigNumberish, BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "distributeRewards",
      values?: undefined
    ): string;
    encodeFunctionData(functionFragment: "getPools", values?: undefined): string;
    encodeFunctionData(
      functionFragment: "getRoleAdmin",
      values: [BytesLike]
    ): string;
    encodeFunctionData(
      functionFragment: "getRoleMember",
      values: [BytesLike, BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "getRoleMemberCount",
      values: [BytesLike]
    ): string;
    encodeFunctionData(
      functionFragment: "grantRole",
      values: [BytesLike, string]
    ): string;
    encodeFunctionData(
      functionFragment: "hasRole",
      values: [BytesLike, string]
    ): string;
    encodeFunctionData(
      functionFragment: "lastDistribution",
      values?: undefined
    ): string;
    encodeFunctionData(functionFragment: "poolAdded", values: [string]): string;
    encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
    encodeFunctionData(
      functionFragment: "removePool",
      values: [BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "renounceRole",
      values: [BytesLike, string]
    ): string;
    encodeFunctionData(
      functionFragment: "revokeRole",
      values: [BytesLike, string]
    ): string;
    encodeFunctionData(functionFragment: "reward", values?: undefined): string;
    encodeFunctionData(
      functionFragment: "rewardPerSecond",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "rewardSource",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "saveToken",
      values: [string, string, BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "setRewardPerSecond",
      values: [BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "supportsInterface",
      values: [BytesLike]
    ): string;
    encodeFunctionData(
      functionFragment: "totalWeight",
      values?: undefined
    ): string;
  
    decodeFunctionResult(
      functionFragment: "DEFAULT_ADMIN_ROLE",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "GOV_ROLE", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "MAX_POOL_COUNT",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "REWARD_DISTRIBUTOR_ROLE",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "TOKEN_SAVER_ROLE",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "adjustWeight",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "distributeRewards",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "getRoleAdmin",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "getRoleMember",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "getRoleMemberCount",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "lastDistribution",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "poolAdded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePool", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "renounceRole",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "rewardPerSecond",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "rewardSource",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "saveToken", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "setRewardPerSecond",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "supportsInterface",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "totalWeight",
      data: BytesLike
    ): Result;
  
    events: {
      "PoolAdded(address,uint256)": EventFragment;
      "PoolRemoved(uint256,address)": EventFragment;
      "RewardsDistributed(address,uint256)": EventFragment;
      "RewardsPerSecondSet(uint256)": EventFragment;
      "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
      "RoleGranted(bytes32,address,address)": EventFragment;
      "RoleRevoked(bytes32,address,address)": EventFragment;
      "TokenSaved(address,address,address,uint256)": EventFragment;
      "WeightAdjusted(uint256,address,uint256)": EventFragment;
    };
  
    getEvent(nameOrSignatureOrTopic: "PoolAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardsPerSecondSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenSaved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WeightAdjusted"): EventFragment;
  }
  
  export class LiquidityMiningManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
  
    listeners<EventArgsArray extends Array<any>, EventArgsObject>(
      eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
    ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
    off<EventArgsArray extends Array<any>, EventArgsObject>(
      eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
      listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    on<EventArgsArray extends Array<any>, EventArgsObject>(
      eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
      listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    once<EventArgsArray extends Array<any>, EventArgsObject>(
      eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
      listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
      eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
      listener: TypedListener<EventArgsArray, EventArgsObject>
    ): this;
    removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
      eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
    ): this;
  
    listeners(eventName?: string): Array<Listener>;
    off(eventName: string, listener: Listener): this;
    on(eventName: string, listener: Listener): this;
    once(eventName: string, listener: Listener): this;
    removeListener(eventName: string, listener: Listener): this;
    removeAllListeners(eventName?: string): this;
  
    queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
      event: TypedEventFilter<EventArgsArray, EventArgsObject>,
      fromBlockOrBlockhash?: string | number | undefined,
      toBlock?: string | number | undefined
    ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;
  
    interface: LiquidityMiningManagerInterface;
  
    functions: {
      DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
  
      GOV_ROLE(overrides?: CallOverrides): Promise<[string]>;
  
      MAX_POOL_COUNT(overrides?: CallOverrides): Promise<[BigNumber]>;
  
      REWARD_DISTRIBUTOR_ROLE(overrides?: CallOverrides): Promise<[string]>;
  
      TOKEN_SAVER_ROLE(overrides?: CallOverrides): Promise<[string]>;
  
      addPool(
        _poolContract: string,
        _weight: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      adjustWeight(
        _poolId: BigNumberish,
        _newWeight: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      distributeRewards(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      getPools(
        overrides?: CallOverrides
      ): Promise<
        [
          ([string, BigNumber] & { poolContract: string; weight: BigNumber })[]
        ] & {
          result: ([string, BigNumber] & {
            poolContract: string;
            weight: BigNumber;
          })[];
        }
      >;
  
      getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  
      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<[string]>;
  
      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<[BigNumber]>;
  
      grantRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<[boolean]>;
  
      lastDistribution(overrides?: CallOverrides): Promise<[BigNumber]>;
  
      poolAdded(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  
      pools(
        arg0: BigNumberish,
        overrides?: CallOverrides
      ): Promise<
        [string, BigNumber] & { poolContract: string; weight: BigNumber }
      >;
  
      removePool(
        _poolId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      revokeRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      reward(overrides?: CallOverrides): Promise<[string]>;
  
      rewardPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;
  
      rewardSource(overrides?: CallOverrides): Promise<[string]>;
  
      saveToken(
        _token: string,
        _receiver: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      setRewardPerSecond(
        _rewardPerSecond: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<[boolean]>;
  
      totalWeight(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
  
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
  
    GOV_ROLE(overrides?: CallOverrides): Promise<string>;
  
    MAX_POOL_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
  
    REWARD_DISTRIBUTOR_ROLE(overrides?: CallOverrides): Promise<string>;
  
    TOKEN_SAVER_ROLE(overrides?: CallOverrides): Promise<string>;
  
    addPool(
      _poolContract: string,
      _weight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    adjustWeight(
      _poolId: BigNumberish,
      _newWeight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    distributeRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    getPools(
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber] & { poolContract: string; weight: BigNumber })[]
    >;
  
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
  
    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  
    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  
    lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;
  
    poolAdded(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  
    pools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { poolContract: string; weight: BigNumber }>;
  
    removePool(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    reward(overrides?: CallOverrides): Promise<string>;
  
    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;
  
    rewardSource(overrides?: CallOverrides): Promise<string>;
  
    saveToken(
      _token: string,
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    setRewardPerSecond(
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  
    totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
  
    callStatic: {
      DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
  
      GOV_ROLE(overrides?: CallOverrides): Promise<string>;
  
      MAX_POOL_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
  
      REWARD_DISTRIBUTOR_ROLE(overrides?: CallOverrides): Promise<string>;
  
      TOKEN_SAVER_ROLE(overrides?: CallOverrides): Promise<string>;
  
      addPool(
        _poolContract: string,
        _weight: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
  
      adjustWeight(
        _poolId: BigNumberish,
        _newWeight: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
  
      distributeRewards(overrides?: CallOverrides): Promise<void>;
  
      getPools(
        overrides?: CallOverrides
      ): Promise<
        ([string, BigNumber] & { poolContract: string; weight: BigNumber })[]
      >;
  
      getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
  
      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<string>;
  
      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      grantRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;
  
      poolAdded(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  
      pools(
        arg0: BigNumberish,
        overrides?: CallOverrides
      ): Promise<
        [string, BigNumber] & { poolContract: string; weight: BigNumber }
      >;
  
      removePool(_poolId: BigNumberish, overrides?: CallOverrides): Promise<void>;
  
      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      revokeRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<void>;
  
      reward(overrides?: CallOverrides): Promise<string>;
  
      rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;
  
      rewardSource(overrides?: CallOverrides): Promise<string>;
  
      saveToken(
        _token: string,
        _receiver: string,
        _amount: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
  
      setRewardPerSecond(
        _rewardPerSecond: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
    };
  
    filters: {
      PoolAdded(
        pool?: string | null,
        weight?: null
      ): TypedEventFilter<
        [string, BigNumber],
        { pool: string; weight: BigNumber }
      >;
  
      PoolRemoved(
        poolId?: BigNumberish | null,
        pool?: string | null
      ): TypedEventFilter<
        [BigNumber, string],
        { poolId: BigNumber; pool: string }
      >;
  
      RewardsDistributed(
        _from?: null,
        _amount?: BigNumberish | null
      ): TypedEventFilter<
        [string, BigNumber],
        { _from: string; _amount: BigNumber }
      >;
  
      RewardsPerSecondSet(
        rewardsPerSecond?: null
      ): TypedEventFilter<[BigNumber], { rewardsPerSecond: BigNumber }>;
  
      RoleAdminChanged(
        role?: BytesLike | null,
        previousAdminRole?: BytesLike | null,
        newAdminRole?: BytesLike | null
      ): TypedEventFilter<
        [string, string, string],
        { role: string; previousAdminRole: string; newAdminRole: string }
      >;
  
      RoleGranted(
        role?: BytesLike | null,
        account?: string | null,
        sender?: string | null
      ): TypedEventFilter<
        [string, string, string],
        { role: string; account: string; sender: string }
      >;
  
      RoleRevoked(
        role?: BytesLike | null,
        account?: string | null,
        sender?: string | null
      ): TypedEventFilter<
        [string, string, string],
        { role: string; account: string; sender: string }
      >;
  
      TokenSaved(
        by?: string | null,
        receiver?: string | null,
        token?: string | null,
        amount?: null
      ): TypedEventFilter<
        [string, string, string, BigNumber],
        { by: string; receiver: string; token: string; amount: BigNumber }
      >;
  
      WeightAdjusted(
        poolId?: BigNumberish | null,
        pool?: string | null,
        newWeight?: null
      ): TypedEventFilter<
        [BigNumber, string, BigNumber],
        { poolId: BigNumber; pool: string; newWeight: BigNumber }
      >;
    };
  
    estimateGas: {
      DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
  
      GOV_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
  
      MAX_POOL_COUNT(overrides?: CallOverrides): Promise<BigNumber>;
  
      REWARD_DISTRIBUTOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
  
      TOKEN_SAVER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
  
      addPool(
        _poolContract: string,
        _weight: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      adjustWeight(
        _poolId: BigNumberish,
        _newWeight: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      distributeRewards(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      getPools(overrides?: CallOverrides): Promise<BigNumber>;
  
      getRoleAdmin(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      grantRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      lastDistribution(overrides?: CallOverrides): Promise<BigNumber>;
  
      poolAdded(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  
      removePool(
        _poolId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      revokeRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      reward(overrides?: CallOverrides): Promise<BigNumber>;
  
      rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;
  
      rewardSource(overrides?: CallOverrides): Promise<BigNumber>;
  
      saveToken(
        _token: string,
        _receiver: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      setRewardPerSecond(
        _rewardPerSecond: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      totalWeight(overrides?: CallOverrides): Promise<BigNumber>;
    };
  
    populateTransaction: {
      DEFAULT_ADMIN_ROLE(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      GOV_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      MAX_POOL_COUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      REWARD_DISTRIBUTOR_ROLE(
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      TOKEN_SAVER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      addPool(
        _poolContract: string,
        _weight: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      adjustWeight(
        _poolId: BigNumberish,
        _newWeight: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      distributeRewards(
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      getPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      getRoleAdmin(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      getRoleMember(
        role: BytesLike,
        index: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      getRoleMemberCount(
        role: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      grantRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      hasRole(
        role: BytesLike,
        account: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      lastDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      poolAdded(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      pools(
        arg0: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      removePool(
        _poolId: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      renounceRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      revokeRole(
        role: BytesLike,
        account: string,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      reward(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      rewardPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      rewardSource(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      saveToken(
        _token: string,
        _receiver: string,
        _amount: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      setRewardPerSecond(
        _rewardPerSecond: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      supportsInterface(
        interfaceId: BytesLike,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      totalWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
  }
  