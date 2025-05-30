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
 * movement object
 * @export
 * @interface PutFleetsFleetIdMembersMemberIdMovement
 */
export interface PutFleetsFleetIdMembersMemberIdMovement {
    /**
     * If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified.
     * @type {string}
     * @memberof PutFleetsFleetIdMembersMemberIdMovement
     */
    role: PutFleetsFleetIdMembersMemberIdMovementRoleEnum;
    /**
     * squad_id integer
     * @type {number}
     * @memberof PutFleetsFleetIdMembersMemberIdMovement
     */
    squadId?: number;
    /**
     * wing_id integer
     * @type {number}
     * @memberof PutFleetsFleetIdMembersMemberIdMovement
     */
    wingId?: number;
}


/**
 * @export
 */
export const PutFleetsFleetIdMembersMemberIdMovementRoleEnum = {
    FleetCommander: 'fleet_commander',
    WingCommander: 'wing_commander',
    SquadCommander: 'squad_commander',
    SquadMember: 'squad_member'
} as const;
export type PutFleetsFleetIdMembersMemberIdMovementRoleEnum = typeof PutFleetsFleetIdMembersMemberIdMovementRoleEnum[keyof typeof PutFleetsFleetIdMembersMemberIdMovementRoleEnum];


/**
 * Check if a given object implements the PutFleetsFleetIdMembersMemberIdMovement interface.
 */
export function instanceOfPutFleetsFleetIdMembersMemberIdMovement(value: object): value is PutFleetsFleetIdMembersMemberIdMovement {
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function PutFleetsFleetIdMembersMemberIdMovementFromJSON(json: any): PutFleetsFleetIdMembersMemberIdMovement {
    return PutFleetsFleetIdMembersMemberIdMovementFromJSONTyped(json, false);
}

export function PutFleetsFleetIdMembersMemberIdMovementFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutFleetsFleetIdMembersMemberIdMovement {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'],
        'squadId': json['squad_id'] == null ? undefined : json['squad_id'],
        'wingId': json['wing_id'] == null ? undefined : json['wing_id'],
    };
}

export function PutFleetsFleetIdMembersMemberIdMovementToJSON(json: any): PutFleetsFleetIdMembersMemberIdMovement {
    return PutFleetsFleetIdMembersMemberIdMovementToJSONTyped(json, false);
}

export function PutFleetsFleetIdMembersMemberIdMovementToJSONTyped(value?: PutFleetsFleetIdMembersMemberIdMovement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'role': value['role'],
        'squad_id': value['squadId'],
        'wing_id': value['wingId'],
    };
}

