/* tslint:disable */
/* eslint-disable */
/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * The version of the OpenAPI document: 1.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 200 ok object
 * @export
 * @interface GetCharactersCharacterIdContracts200Ok
 */
export interface GetCharactersCharacterIdContracts200Ok {
    /**
     * Who will accept the contract
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    acceptorId: number;
    /**
     * ID to whom the contract is assigned, can be alliance, corporation or character ID
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    assigneeId: number;
    /**
     * To whom the contract is available
     * @type {string}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    availability: GetCharactersCharacterIdContracts200OkAvailabilityEnum;
    /**
     * Buyout price (for Auctions only)
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    collateral?: number;
    /**
     * contract_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    contractId: number;
    /**
     * Date of confirmation of contract
     * @type {Date}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    dateAccepted?: Date;
    /**
     * Date of completed of contract
     * @type {Date}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    dateCompleted?: Date;
    /**
     * Expiration date of the contract
     * @type {Date}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    dateExpired: Date;
    /**
     * Сreation date of the contract
     * @type {Date}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    dateIssued: Date;
    /**
     * Number of days to perform the contract
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    daysToComplete?: number;
    /**
     * End location ID (for Couriers contract)
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    endLocationId?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     * @type {boolean}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    forCorporation: boolean;
    /**
     * Character's corporation ID for the issuer
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    issuerCorporationId: number;
    /**
     * Character ID for the issuer
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    issuerId: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    startLocationId?: number;
    /**
     * Status of the the contract
     * @type {string}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    status: GetCharactersCharacterIdContracts200OkStatusEnum;
    /**
     * Title of the contract
     * @type {string}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    title?: string;
    /**
     * Type of the contract
     * @type {string}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    type: GetCharactersCharacterIdContracts200OkTypeEnum;
    /**
     * Volume of items in the contract
     * @type {number}
     * @memberof GetCharactersCharacterIdContracts200Ok
     */
    volume?: number;
}


/**
 * @export
 */
export const GetCharactersCharacterIdContracts200OkAvailabilityEnum = {
    Public: 'public',
    Personal: 'personal',
    Corporation: 'corporation',
    Alliance: 'alliance'
} as const;
export type GetCharactersCharacterIdContracts200OkAvailabilityEnum = typeof GetCharactersCharacterIdContracts200OkAvailabilityEnum[keyof typeof GetCharactersCharacterIdContracts200OkAvailabilityEnum];

/**
 * @export
 */
export const GetCharactersCharacterIdContracts200OkStatusEnum = {
    Outstanding: 'outstanding',
    InProgress: 'in_progress',
    FinishedIssuer: 'finished_issuer',
    FinishedContractor: 'finished_contractor',
    Finished: 'finished',
    Cancelled: 'cancelled',
    Rejected: 'rejected',
    Failed: 'failed',
    Deleted: 'deleted',
    Reversed: 'reversed'
} as const;
export type GetCharactersCharacterIdContracts200OkStatusEnum = typeof GetCharactersCharacterIdContracts200OkStatusEnum[keyof typeof GetCharactersCharacterIdContracts200OkStatusEnum];

/**
 * @export
 */
export const GetCharactersCharacterIdContracts200OkTypeEnum = {
    Unknown: 'unknown',
    ItemExchange: 'item_exchange',
    Auction: 'auction',
    Courier: 'courier',
    Loan: 'loan'
} as const;
export type GetCharactersCharacterIdContracts200OkTypeEnum = typeof GetCharactersCharacterIdContracts200OkTypeEnum[keyof typeof GetCharactersCharacterIdContracts200OkTypeEnum];


/**
 * Check if a given object implements the GetCharactersCharacterIdContracts200Ok interface.
 */
export function instanceOfGetCharactersCharacterIdContracts200Ok(value: object): value is GetCharactersCharacterIdContracts200Ok {
    if (!('acceptorId' in value) || value['acceptorId'] === undefined) return false;
    if (!('assigneeId' in value) || value['assigneeId'] === undefined) return false;
    if (!('availability' in value) || value['availability'] === undefined) return false;
    if (!('contractId' in value) || value['contractId'] === undefined) return false;
    if (!('dateExpired' in value) || value['dateExpired'] === undefined) return false;
    if (!('dateIssued' in value) || value['dateIssued'] === undefined) return false;
    if (!('forCorporation' in value) || value['forCorporation'] === undefined) return false;
    if (!('issuerCorporationId' in value) || value['issuerCorporationId'] === undefined) return false;
    if (!('issuerId' in value) || value['issuerId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function GetCharactersCharacterIdContracts200OkFromJSON(json: any): GetCharactersCharacterIdContracts200Ok {
    return GetCharactersCharacterIdContracts200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdContracts200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdContracts200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'acceptorId': json['acceptor_id'],
        'assigneeId': json['assignee_id'],
        'availability': json['availability'],
        'buyout': json['buyout'] == null ? undefined : json['buyout'],
        'collateral': json['collateral'] == null ? undefined : json['collateral'],
        'contractId': json['contract_id'],
        'dateAccepted': json['date_accepted'] == null ? undefined : (new Date(json['date_accepted'])),
        'dateCompleted': json['date_completed'] == null ? undefined : (new Date(json['date_completed'])),
        'dateExpired': (new Date(json['date_expired'])),
        'dateIssued': (new Date(json['date_issued'])),
        'daysToComplete': json['days_to_complete'] == null ? undefined : json['days_to_complete'],
        'endLocationId': json['end_location_id'] == null ? undefined : json['end_location_id'],
        'forCorporation': json['for_corporation'],
        'issuerCorporationId': json['issuer_corporation_id'],
        'issuerId': json['issuer_id'],
        'price': json['price'] == null ? undefined : json['price'],
        'reward': json['reward'] == null ? undefined : json['reward'],
        'startLocationId': json['start_location_id'] == null ? undefined : json['start_location_id'],
        'status': json['status'],
        'title': json['title'] == null ? undefined : json['title'],
        'type': json['type'],
        'volume': json['volume'] == null ? undefined : json['volume'],
    };
}

export function GetCharactersCharacterIdContracts200OkToJSON(json: any): GetCharactersCharacterIdContracts200Ok {
    return GetCharactersCharacterIdContracts200OkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdContracts200OkToJSONTyped(value?: GetCharactersCharacterIdContracts200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'acceptor_id': value['acceptorId'],
        'assignee_id': value['assigneeId'],
        'availability': value['availability'],
        'buyout': value['buyout'],
        'collateral': value['collateral'],
        'contract_id': value['contractId'],
        'date_accepted': value['dateAccepted'] == null ? undefined : ((value['dateAccepted']).toISOString()),
        'date_completed': value['dateCompleted'] == null ? undefined : ((value['dateCompleted']).toISOString()),
        'date_expired': ((value['dateExpired']).toISOString()),
        'date_issued': ((value['dateIssued']).toISOString()),
        'days_to_complete': value['daysToComplete'],
        'end_location_id': value['endLocationId'],
        'for_corporation': value['forCorporation'],
        'issuer_corporation_id': value['issuerCorporationId'],
        'issuer_id': value['issuerId'],
        'price': value['price'],
        'reward': value['reward'],
        'start_location_id': value['startLocationId'],
        'status': value['status'],
        'title': value['title'],
        'type': value['type'],
        'volume': value['volume'],
    };
}

