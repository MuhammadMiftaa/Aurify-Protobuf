// package: investment
// file: investment/investment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class AssetCode extends jspb.Message { 
    getCode(): string;
    setCode(value: string): AssetCode;
    getName(): string;
    setName(value: string): AssetCode;
    getUnit(): string;
    setUnit(value: string): AssetCode;
    getTousd(): number;
    setTousd(value: number): AssetCode;
    getToeur(): number;
    setToeur(value: number): AssetCode;
    getToidr(): number;
    setToidr(value: number): AssetCode;
    getCreatedat(): string;
    setCreatedat(value: string): AssetCode;
    getUpdatedat(): string;
    setUpdatedat(value: string): AssetCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetCode.AsObject;
    static toObject(includeInstance: boolean, msg: AssetCode): AssetCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetCode;
    static deserializeBinaryFromReader(message: AssetCode, reader: jspb.BinaryReader): AssetCode;
}

export namespace AssetCode {
    export type AsObject = {
        code: string,
        name: string,
        unit: string,
        tousd: number,
        toeur: number,
        toidr: number,
        createdat: string,
        updatedat: string,
    }
}

export class Investment extends jspb.Message { 
    getId(): string;
    setId(value: string): Investment;
    getCode(): string;
    setCode(value: string): Investment;
    getUserid(): string;
    setUserid(value: string): Investment;
    getQuantity(): number;
    setQuantity(value: number): Investment;
    getInitialvaluation(): number;
    setInitialvaluation(value: number): Investment;
    getAmount(): number;
    setAmount(value: number): Investment;
    getDate(): string;
    setDate(value: string): Investment;
    getDescription(): string;
    setDescription(value: string): Investment;

    hasAssetcode(): boolean;
    clearAssetcode(): void;
    getAssetcode(): AssetCode | undefined;
    setAssetcode(value?: AssetCode): Investment;
    getCreatedat(): string;
    setCreatedat(value: string): Investment;
    getUpdatedat(): string;
    setUpdatedat(value: string): Investment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Investment.AsObject;
    static toObject(includeInstance: boolean, msg: Investment): Investment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Investment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Investment;
    static deserializeBinaryFromReader(message: Investment, reader: jspb.BinaryReader): Investment;
}

export namespace Investment {
    export type AsObject = {
        id: string,
        code: string,
        userid: string,
        quantity: number,
        initialvaluation: number,
        amount: number,
        date: string,
        description: string,
        assetcode?: AssetCode.AsObject,
        createdat: string,
        updatedat: string,
    }
}

export class InvestmentSold extends jspb.Message { 
    getId(): string;
    setId(value: string): InvestmentSold;
    getInvestmentid(): string;
    setInvestmentid(value: string): InvestmentSold;
    getUserid(): string;
    setUserid(value: string): InvestmentSold;
    getQuantity(): number;
    setQuantity(value: number): InvestmentSold;
    getSellprice(): number;
    setSellprice(value: number): InvestmentSold;
    getAmount(): number;
    setAmount(value: number): InvestmentSold;
    getDate(): string;
    setDate(value: string): InvestmentSold;
    getDescription(): string;
    setDescription(value: string): InvestmentSold;
    getDeficit(): number;
    setDeficit(value: number): InvestmentSold;
    getCreatedat(): string;
    setCreatedat(value: string): InvestmentSold;
    getUpdatedat(): string;
    setUpdatedat(value: string): InvestmentSold;

    hasAssetcode(): boolean;
    clearAssetcode(): void;
    getAssetcode(): AssetCode | undefined;
    setAssetcode(value?: AssetCode): InvestmentSold;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvestmentSold.AsObject;
    static toObject(includeInstance: boolean, msg: InvestmentSold): InvestmentSold.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvestmentSold, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvestmentSold;
    static deserializeBinaryFromReader(message: InvestmentSold, reader: jspb.BinaryReader): InvestmentSold;
}

export namespace InvestmentSold {
    export type AsObject = {
        id: string,
        investmentid: string,
        userid: string,
        quantity: number,
        sellprice: number,
        amount: number,
        date: string,
        description: string,
        deficit: number,
        createdat: string,
        updatedat: string,
        assetcode?: AssetCode.AsObject,
    }
}

export class InvestmentID extends jspb.Message { 
    getId(): string;
    setId(value: string): InvestmentID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvestmentID.AsObject;
    static toObject(includeInstance: boolean, msg: InvestmentID): InvestmentID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvestmentID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvestmentID;
    static deserializeBinaryFromReader(message: InvestmentID, reader: jspb.BinaryReader): InvestmentID;
}

export namespace InvestmentID {
    export type AsObject = {
        id: string,
    }
}

export class UserID extends jspb.Message { 
    getId(): string;
    setId(value: string): UserID;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserID.AsObject;
    static toObject(includeInstance: boolean, msg: UserID): UserID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserID;
    static deserializeBinaryFromReader(message: UserID, reader: jspb.BinaryReader): UserID;
}

export namespace UserID {
    export type AsObject = {
        id: string,
    }
}

export class GetInvestmentOptions extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetInvestmentOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInvestmentOptions.AsObject;
    static toObject(includeInstance: boolean, msg: GetInvestmentOptions): GetInvestmentOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInvestmentOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInvestmentOptions;
    static deserializeBinaryFromReader(message: GetInvestmentOptions, reader: jspb.BinaryReader): GetInvestmentOptions;
}

export namespace GetInvestmentOptions {
    export type AsObject = {
        limit: number,
    }
}

export class GetUserInvestmentListRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): GetUserInvestmentListRequest;
    getPage(): number;
    setPage(value: number): GetUserInvestmentListRequest;
    getPagesize(): number;
    setPagesize(value: number): GetUserInvestmentListRequest;
    getSortby(): string;
    setSortby(value: string): GetUserInvestmentListRequest;
    getSortorder(): string;
    setSortorder(value: string): GetUserInvestmentListRequest;
    getSearch(): string;
    setSearch(value: string): GetUserInvestmentListRequest;
    getCode(): string;
    setCode(value: string): GetUserInvestmentListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInvestmentListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInvestmentListRequest): GetUserInvestmentListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInvestmentListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInvestmentListRequest;
    static deserializeBinaryFromReader(message: GetUserInvestmentListRequest, reader: jspb.BinaryReader): GetUserInvestmentListRequest;
}

export namespace GetUserInvestmentListRequest {
    export type AsObject = {
        userid: string,
        page: number,
        pagesize: number,
        sortby: string,
        sortorder: string,
        search: string,
        code: string,
    }
}

export class GetInvestmentDetailRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): GetInvestmentDetailRequest;
    getInvestmentid(): string;
    setInvestmentid(value: string): GetInvestmentDetailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInvestmentDetailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInvestmentDetailRequest): GetInvestmentDetailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInvestmentDetailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInvestmentDetailRequest;
    static deserializeBinaryFromReader(message: GetInvestmentDetailRequest, reader: jspb.BinaryReader): GetInvestmentDetailRequest;
}

export namespace GetInvestmentDetailRequest {
    export type AsObject = {
        userid: string,
        investmentid: string,
    }
}

export class CreateInvestmentRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): CreateInvestmentRequest;
    getCode(): string;
    setCode(value: string): CreateInvestmentRequest;
    getQuantity(): number;
    setQuantity(value: number): CreateInvestmentRequest;
    getAmount(): number;
    setAmount(value: number): CreateInvestmentRequest;
    getInitialvaluation(): number;
    setInitialvaluation(value: number): CreateInvestmentRequest;
    getDate(): string;
    setDate(value: string): CreateInvestmentRequest;
    getDescription(): string;
    setDescription(value: string): CreateInvestmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInvestmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInvestmentRequest): CreateInvestmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInvestmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInvestmentRequest;
    static deserializeBinaryFromReader(message: CreateInvestmentRequest, reader: jspb.BinaryReader): CreateInvestmentRequest;
}

export namespace CreateInvestmentRequest {
    export type AsObject = {
        userid: string,
        code: string,
        quantity: number,
        amount: number,
        initialvaluation: number,
        date: string,
        description: string,
    }
}

export class SellInvestmentRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): SellInvestmentRequest;
    getAssetcode(): string;
    setAssetcode(value: string): SellInvestmentRequest;
    getQuantity(): number;
    setQuantity(value: number): SellInvestmentRequest;
    getAmount(): number;
    setAmount(value: number): SellInvestmentRequest;
    getDate(): string;
    setDate(value: string): SellInvestmentRequest;
    getDescription(): string;
    setDescription(value: string): SellInvestmentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellInvestmentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SellInvestmentRequest): SellInvestmentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellInvestmentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellInvestmentRequest;
    static deserializeBinaryFromReader(message: SellInvestmentRequest, reader: jspb.BinaryReader): SellInvestmentRequest;
}

export namespace SellInvestmentRequest {
    export type AsObject = {
        userid: string,
        assetcode: string,
        quantity: number,
        amount: number,
        date: string,
        description: string,
    }
}

export class GetUserInvestmentListResponse extends jspb.Message { 
    clearInvestmentsList(): void;
    getInvestmentsList(): Array<Investment>;
    setInvestmentsList(value: Array<Investment>): GetUserInvestmentListResponse;
    addInvestments(value?: Investment, index?: number): Investment;
    getTotal(): number;
    setTotal(value: number): GetUserInvestmentListResponse;
    getPage(): number;
    setPage(value: number): GetUserInvestmentListResponse;
    getPagesize(): number;
    setPagesize(value: number): GetUserInvestmentListResponse;
    getTotalpages(): number;
    setTotalpages(value: number): GetUserInvestmentListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInvestmentListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInvestmentListResponse): GetUserInvestmentListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInvestmentListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInvestmentListResponse;
    static deserializeBinaryFromReader(message: GetUserInvestmentListResponse, reader: jspb.BinaryReader): GetUserInvestmentListResponse;
}

export namespace GetUserInvestmentListResponse {
    export type AsObject = {
        investmentsList: Array<Investment.AsObject>,
        total: number,
        page: number,
        pagesize: number,
        totalpages: number,
    }
}

export class SellInvestmentResponse extends jspb.Message { 
    clearSoldrecordsList(): void;
    getSoldrecordsList(): Array<InvestmentSold>;
    setSoldrecordsList(value: Array<InvestmentSold>): SellInvestmentResponse;
    addSoldrecords(value?: InvestmentSold, index?: number): InvestmentSold;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellInvestmentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SellInvestmentResponse): SellInvestmentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellInvestmentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellInvestmentResponse;
    static deserializeBinaryFromReader(message: SellInvestmentResponse, reader: jspb.BinaryReader): SellInvestmentResponse;
}

export namespace SellInvestmentResponse {
    export type AsObject = {
        soldrecordsList: Array<InvestmentSold.AsObject>,
    }
}

export class InvestmentSummaryResponse extends jspb.Message { 
    getTotalinvestments(): number;
    setTotalinvestments(value: number): InvestmentSummaryResponse;
    getTotalinvested(): number;
    setTotalinvested(value: number): InvestmentSummaryResponse;
    getTotalcurrentvalue(): number;
    setTotalcurrentvalue(value: number): InvestmentSummaryResponse;
    getTotalprofitloss(): number;
    setTotalprofitloss(value: number): InvestmentSummaryResponse;
    getTotalprofitlosspct(): number;
    setTotalprofitlosspct(value: number): InvestmentSummaryResponse;
    getTotalsoldamount(): number;
    setTotalsoldamount(value: number): InvestmentSummaryResponse;
    getTotalrealizedgain(): number;
    setTotalrealizedgain(value: number): InvestmentSummaryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvestmentSummaryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InvestmentSummaryResponse): InvestmentSummaryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvestmentSummaryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvestmentSummaryResponse;
    static deserializeBinaryFromReader(message: InvestmentSummaryResponse, reader: jspb.BinaryReader): InvestmentSummaryResponse;
}

export namespace InvestmentSummaryResponse {
    export type AsObject = {
        totalinvestments: number,
        totalinvested: number,
        totalcurrentvalue: number,
        totalprofitloss: number,
        totalprofitlosspct: number,
        totalsoldamount: number,
        totalrealizedgain: number,
    }
}

export class GetAssetCodesResponse extends jspb.Message { 
    clearAssetcodesList(): void;
    getAssetcodesList(): Array<AssetCode>;
    setAssetcodesList(value: Array<AssetCode>): GetAssetCodesResponse;
    addAssetcodes(value?: AssetCode, index?: number): AssetCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetCodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetCodesResponse): GetAssetCodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetCodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetCodesResponse;
    static deserializeBinaryFromReader(message: GetAssetCodesResponse, reader: jspb.BinaryReader): GetAssetCodesResponse;
}

export namespace GetAssetCodesResponse {
    export type AsObject = {
        assetcodesList: Array<AssetCode.AsObject>,
    }
}
