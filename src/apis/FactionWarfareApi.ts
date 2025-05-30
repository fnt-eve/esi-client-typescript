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


import * as runtime from '../runtime';
import type {
  BadRequest,
  ErrorLimited,
  Forbidden,
  GatewayTimeout,
  GetCharactersCharacterIdFwStatsOk,
  GetCorporationsCorporationIdFwStatsOk,
  GetFwLeaderboardsCharactersOk,
  GetFwLeaderboardsCorporationsOk,
  GetFwLeaderboardsOk,
  GetFwStats200Ok,
  GetFwSystems200Ok,
  GetFwWars200Ok,
  InternalServerError,
  ServiceUnavailable,
  Unauthorized,
} from '../models/index';
import {
    BadRequestFromJSON,
    BadRequestToJSON,
    ErrorLimitedFromJSON,
    ErrorLimitedToJSON,
    ForbiddenFromJSON,
    ForbiddenToJSON,
    GatewayTimeoutFromJSON,
    GatewayTimeoutToJSON,
    GetCharactersCharacterIdFwStatsOkFromJSON,
    GetCharactersCharacterIdFwStatsOkToJSON,
    GetCorporationsCorporationIdFwStatsOkFromJSON,
    GetCorporationsCorporationIdFwStatsOkToJSON,
    GetFwLeaderboardsCharactersOkFromJSON,
    GetFwLeaderboardsCharactersOkToJSON,
    GetFwLeaderboardsCorporationsOkFromJSON,
    GetFwLeaderboardsCorporationsOkToJSON,
    GetFwLeaderboardsOkFromJSON,
    GetFwLeaderboardsOkToJSON,
    GetFwStats200OkFromJSON,
    GetFwStats200OkToJSON,
    GetFwSystems200OkFromJSON,
    GetFwSystems200OkToJSON,
    GetFwWars200OkFromJSON,
    GetFwWars200OkToJSON,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
    UnauthorizedFromJSON,
    UnauthorizedToJSON,
} from '../models/index';

export interface GetCharactersCharacterIdFwStatsRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdFwStatsDatasourceEnum;
    ifNoneMatch?: string;
    token?: string;
}

export interface GetCorporationsCorporationIdFwStatsRequest {
    corporationId: number;
    datasource?: GetCorporationsCorporationIdFwStatsDatasourceEnum;
    ifNoneMatch?: string;
    token?: string;
}

export interface GetFwLeaderboardsRequest {
    datasource?: GetFwLeaderboardsDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetFwLeaderboardsCharactersRequest {
    datasource?: GetFwLeaderboardsCharactersDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetFwLeaderboardsCorporationsRequest {
    datasource?: GetFwLeaderboardsCorporationsDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetFwStatsRequest {
    datasource?: GetFwStatsDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetFwSystemsRequest {
    datasource?: GetFwSystemsDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetFwWarsRequest {
    datasource?: GetFwWarsDatasourceEnum;
    ifNoneMatch?: string;
}

/**
 * 
 */
export class FactionWarfareApi extends runtime.BaseAPI {

    /**
     * Statistical overview of a character involved in faction warfare  ---  This route expires daily at 11:05
     * Overview of a character involved in faction warfare
     */
    async getCharactersCharacterIdFwStatsRaw(requestParameters: GetCharactersCharacterIdFwStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCharactersCharacterIdFwStatsOk>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdFwStats().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['token'] != null) {
            queryParameters['token'] = requestParameters['token'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-characters.read_fw_stats.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/fw/stats/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCharactersCharacterIdFwStatsOkFromJSON(jsonValue));
    }

    /**
     * Statistical overview of a character involved in faction warfare  ---  This route expires daily at 11:05
     * Overview of a character involved in faction warfare
     */
    async getCharactersCharacterIdFwStats(requestParameters: GetCharactersCharacterIdFwStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCharactersCharacterIdFwStatsOk> {
        const response = await this.getCharactersCharacterIdFwStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Statistics about a corporation involved in faction warfare  ---  This route expires daily at 11:05
     * Overview of a corporation involved in faction warfare
     */
    async getCorporationsCorporationIdFwStatsRaw(requestParameters: GetCorporationsCorporationIdFwStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCorporationsCorporationIdFwStatsOk>> {
        if (requestParameters['corporationId'] == null) {
            throw new runtime.RequiredError(
                'corporationId',
                'Required parameter "corporationId" was null or undefined when calling getCorporationsCorporationIdFwStats().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['token'] != null) {
            queryParameters['token'] = requestParameters['token'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-corporations.read_fw_stats.v1"]);
        }

        const response = await this.request({
            path: `/v1/corporations/{corporation_id}/fw/stats/`.replace(`{${"corporation_id"}}`, encodeURIComponent(String(requestParameters['corporationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCorporationsCorporationIdFwStatsOkFromJSON(jsonValue));
    }

    /**
     * Statistics about a corporation involved in faction warfare  ---  This route expires daily at 11:05
     * Overview of a corporation involved in faction warfare
     */
    async getCorporationsCorporationIdFwStats(requestParameters: GetCorporationsCorporationIdFwStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCorporationsCorporationIdFwStatsOk> {
        const response = await this.getCorporationsCorporationIdFwStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday  ---  This route expires daily at 11:05
     * List of the top factions in faction warfare
     */
    async getFwLeaderboardsRaw(requestParameters: GetFwLeaderboardsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFwLeaderboardsOk>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/fw/leaderboards/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFwLeaderboardsOkFromJSON(jsonValue));
    }

    /**
     * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday  ---  This route expires daily at 11:05
     * List of the top factions in faction warfare
     */
    async getFwLeaderboards(requestParameters: GetFwLeaderboardsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFwLeaderboardsOk> {
        const response = await this.getFwLeaderboardsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday  ---  This route expires daily at 11:05
     * List of the top pilots in faction warfare
     */
    async getFwLeaderboardsCharactersRaw(requestParameters: GetFwLeaderboardsCharactersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFwLeaderboardsCharactersOk>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/fw/leaderboards/characters/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFwLeaderboardsCharactersOkFromJSON(jsonValue));
    }

    /**
     * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday  ---  This route expires daily at 11:05
     * List of the top pilots in faction warfare
     */
    async getFwLeaderboardsCharacters(requestParameters: GetFwLeaderboardsCharactersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFwLeaderboardsCharactersOk> {
        const response = await this.getFwLeaderboardsCharactersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday  ---  This route expires daily at 11:05
     * List of the top corporations in faction warfare
     */
    async getFwLeaderboardsCorporationsRaw(requestParameters: GetFwLeaderboardsCorporationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFwLeaderboardsCorporationsOk>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/fw/leaderboards/corporations/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFwLeaderboardsCorporationsOkFromJSON(jsonValue));
    }

    /**
     * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday  ---  This route expires daily at 11:05
     * List of the top corporations in faction warfare
     */
    async getFwLeaderboardsCorporations(requestParameters: GetFwLeaderboardsCorporationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFwLeaderboardsCorporationsOk> {
        const response = await this.getFwLeaderboardsCorporationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Statistical overviews of factions involved in faction warfare  ---  This route expires daily at 11:05
     * An overview of statistics about factions involved in faction warfare
     */
    async getFwStatsRaw(requestParameters: GetFwStatsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetFwStats200Ok>>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/fw/stats/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetFwStats200OkFromJSON));
    }

    /**
     * Statistical overviews of factions involved in faction warfare  ---  This route expires daily at 11:05
     * An overview of statistics about factions involved in faction warfare
     */
    async getFwStats(requestParameters: GetFwStatsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetFwStats200Ok>> {
        const response = await this.getFwStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * An overview of the current ownership of faction warfare solar systems  ---  This route is cached for up to 1800 seconds
     * Ownership of faction warfare systems
     */
    async getFwSystemsRaw(requestParameters: GetFwSystemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetFwSystems200Ok>>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v2/fw/systems/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetFwSystems200OkFromJSON));
    }

    /**
     * An overview of the current ownership of faction warfare solar systems  ---  This route is cached for up to 1800 seconds
     * Ownership of faction warfare systems
     */
    async getFwSystems(requestParameters: GetFwSystemsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetFwSystems200Ok>> {
        const response = await this.getFwSystemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Data about which NPC factions are at war  ---  This route expires daily at 11:05
     * Data about which NPC factions are at war
     */
    async getFwWarsRaw(requestParameters: GetFwWarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetFwWars200Ok>>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/fw/wars/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetFwWars200OkFromJSON));
    }

    /**
     * Data about which NPC factions are at war  ---  This route expires daily at 11:05
     * Data about which NPC factions are at war
     */
    async getFwWars(requestParameters: GetFwWarsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetFwWars200Ok>> {
        const response = await this.getFwWarsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetCharactersCharacterIdFwStatsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdFwStatsDatasourceEnum = typeof GetCharactersCharacterIdFwStatsDatasourceEnum[keyof typeof GetCharactersCharacterIdFwStatsDatasourceEnum];
/**
 * @export
 */
export const GetCorporationsCorporationIdFwStatsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCorporationsCorporationIdFwStatsDatasourceEnum = typeof GetCorporationsCorporationIdFwStatsDatasourceEnum[keyof typeof GetCorporationsCorporationIdFwStatsDatasourceEnum];
/**
 * @export
 */
export const GetFwLeaderboardsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetFwLeaderboardsDatasourceEnum = typeof GetFwLeaderboardsDatasourceEnum[keyof typeof GetFwLeaderboardsDatasourceEnum];
/**
 * @export
 */
export const GetFwLeaderboardsCharactersDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetFwLeaderboardsCharactersDatasourceEnum = typeof GetFwLeaderboardsCharactersDatasourceEnum[keyof typeof GetFwLeaderboardsCharactersDatasourceEnum];
/**
 * @export
 */
export const GetFwLeaderboardsCorporationsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetFwLeaderboardsCorporationsDatasourceEnum = typeof GetFwLeaderboardsCorporationsDatasourceEnum[keyof typeof GetFwLeaderboardsCorporationsDatasourceEnum];
/**
 * @export
 */
export const GetFwStatsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetFwStatsDatasourceEnum = typeof GetFwStatsDatasourceEnum[keyof typeof GetFwStatsDatasourceEnum];
/**
 * @export
 */
export const GetFwSystemsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetFwSystemsDatasourceEnum = typeof GetFwSystemsDatasourceEnum[keyof typeof GetFwSystemsDatasourceEnum];
/**
 * @export
 */
export const GetFwWarsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetFwWarsDatasourceEnum = typeof GetFwWarsDatasourceEnum[keyof typeof GetFwWarsDatasourceEnum];
