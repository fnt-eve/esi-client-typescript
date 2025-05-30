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
  GetCharactersCharacterIdIndustryJobs200Ok,
  GetCharactersCharacterIdMining200Ok,
  GetCorporationCorporationIdMiningExtractions200Ok,
  GetCorporationCorporationIdMiningObservers200Ok,
  GetCorporationCorporationIdMiningObserversObserverId200Ok,
  GetCorporationsCorporationIdIndustryJobs200Ok,
  GetIndustryFacilities200Ok,
  GetIndustrySystems200Ok,
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
    GetCharactersCharacterIdIndustryJobs200OkFromJSON,
    GetCharactersCharacterIdIndustryJobs200OkToJSON,
    GetCharactersCharacterIdMining200OkFromJSON,
    GetCharactersCharacterIdMining200OkToJSON,
    GetCorporationCorporationIdMiningExtractions200OkFromJSON,
    GetCorporationCorporationIdMiningExtractions200OkToJSON,
    GetCorporationCorporationIdMiningObservers200OkFromJSON,
    GetCorporationCorporationIdMiningObservers200OkToJSON,
    GetCorporationCorporationIdMiningObserversObserverId200OkFromJSON,
    GetCorporationCorporationIdMiningObserversObserverId200OkToJSON,
    GetCorporationsCorporationIdIndustryJobs200OkFromJSON,
    GetCorporationsCorporationIdIndustryJobs200OkToJSON,
    GetIndustryFacilities200OkFromJSON,
    GetIndustryFacilities200OkToJSON,
    GetIndustrySystems200OkFromJSON,
    GetIndustrySystems200OkToJSON,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
    UnauthorizedFromJSON,
    UnauthorizedToJSON,
} from '../models/index';

export interface GetCharactersCharacterIdIndustryJobsRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdIndustryJobsDatasourceEnum;
    ifNoneMatch?: string;
    includeCompleted?: boolean;
    token?: string;
}

export interface GetCharactersCharacterIdMiningRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdMiningDatasourceEnum;
    ifNoneMatch?: string;
    page?: number;
    token?: string;
}

export interface GetCorporationCorporationIdMiningExtractionsRequest {
    corporationId: number;
    datasource?: GetCorporationCorporationIdMiningExtractionsDatasourceEnum;
    ifNoneMatch?: string;
    page?: number;
    token?: string;
}

export interface GetCorporationCorporationIdMiningObserversRequest {
    corporationId: number;
    datasource?: GetCorporationCorporationIdMiningObserversDatasourceEnum;
    ifNoneMatch?: string;
    page?: number;
    token?: string;
}

export interface GetCorporationCorporationIdMiningObserversObserverIdRequest {
    corporationId: number;
    observerId: number;
    datasource?: GetCorporationCorporationIdMiningObserversObserverIdDatasourceEnum;
    ifNoneMatch?: string;
    page?: number;
    token?: string;
}

export interface GetCorporationsCorporationIdIndustryJobsRequest {
    corporationId: number;
    datasource?: GetCorporationsCorporationIdIndustryJobsDatasourceEnum;
    ifNoneMatch?: string;
    includeCompleted?: boolean;
    page?: number;
    token?: string;
}

export interface GetIndustryFacilitiesRequest {
    datasource?: GetIndustryFacilitiesDatasourceEnum;
    ifNoneMatch?: string;
}

export interface GetIndustrySystemsRequest {
    datasource?: GetIndustrySystemsDatasourceEnum;
    ifNoneMatch?: string;
}

/**
 * 
 */
export class IndustryApi extends runtime.BaseAPI {

    /**
     * List industry jobs placed by a character  ---  This route is cached for up to 300 seconds
     * List character industry jobs
     */
    async getCharactersCharacterIdIndustryJobsRaw(requestParameters: GetCharactersCharacterIdIndustryJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCharactersCharacterIdIndustryJobs200Ok>>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdIndustryJobs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['includeCompleted'] != null) {
            queryParameters['include_completed'] = requestParameters['includeCompleted'];
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-industry.read_character_jobs.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/industry/jobs/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCharactersCharacterIdIndustryJobs200OkFromJSON));
    }

    /**
     * List industry jobs placed by a character  ---  This route is cached for up to 300 seconds
     * List character industry jobs
     */
    async getCharactersCharacterIdIndustryJobs(requestParameters: GetCharactersCharacterIdIndustryJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCharactersCharacterIdIndustryJobs200Ok>> {
        const response = await this.getCharactersCharacterIdIndustryJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Paginated record of all mining done by a character for the past 30 days  ---  This route is cached for up to 600 seconds
     * Character mining ledger
     */
    async getCharactersCharacterIdMiningRaw(requestParameters: GetCharactersCharacterIdMiningRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCharactersCharacterIdMining200Ok>>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdMining().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-industry.read_character_mining.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mining/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCharactersCharacterIdMining200OkFromJSON));
    }

    /**
     * Paginated record of all mining done by a character for the past 30 days  ---  This route is cached for up to 600 seconds
     * Character mining ledger
     */
    async getCharactersCharacterIdMining(requestParameters: GetCharactersCharacterIdMiningRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCharactersCharacterIdMining200Ok>> {
        const response = await this.getCharactersCharacterIdMiningRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.  ---  This route is cached for up to 1800 seconds  --- Requires one of the following EVE corporation role(s): Station_Manager
     * Moon extraction timers
     */
    async getCorporationCorporationIdMiningExtractionsRaw(requestParameters: GetCorporationCorporationIdMiningExtractionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCorporationCorporationIdMiningExtractions200Ok>>> {
        if (requestParameters['corporationId'] == null) {
            throw new runtime.RequiredError(
                'corporationId',
                'Required parameter "corporationId" was null or undefined when calling getCorporationCorporationIdMiningExtractions().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-industry.read_corporation_mining.v1"]);
        }

        const response = await this.request({
            path: `/v1/corporation/{corporation_id}/mining/extractions/`.replace(`{${"corporation_id"}}`, encodeURIComponent(String(requestParameters['corporationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCorporationCorporationIdMiningExtractions200OkFromJSON));
    }

    /**
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.  ---  This route is cached for up to 1800 seconds  --- Requires one of the following EVE corporation role(s): Station_Manager
     * Moon extraction timers
     */
    async getCorporationCorporationIdMiningExtractions(requestParameters: GetCorporationCorporationIdMiningExtractionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCorporationCorporationIdMiningExtractions200Ok>> {
        const response = await this.getCorporationCorporationIdMiningExtractionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Paginated list of all entities capable of observing and recording mining for a corporation  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant
     * Corporation mining observers
     */
    async getCorporationCorporationIdMiningObserversRaw(requestParameters: GetCorporationCorporationIdMiningObserversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCorporationCorporationIdMiningObservers200Ok>>> {
        if (requestParameters['corporationId'] == null) {
            throw new runtime.RequiredError(
                'corporationId',
                'Required parameter "corporationId" was null or undefined when calling getCorporationCorporationIdMiningObservers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-industry.read_corporation_mining.v1"]);
        }

        const response = await this.request({
            path: `/v1/corporation/{corporation_id}/mining/observers/`.replace(`{${"corporation_id"}}`, encodeURIComponent(String(requestParameters['corporationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCorporationCorporationIdMiningObservers200OkFromJSON));
    }

    /**
     * Paginated list of all entities capable of observing and recording mining for a corporation  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant
     * Corporation mining observers
     */
    async getCorporationCorporationIdMiningObservers(requestParameters: GetCorporationCorporationIdMiningObserversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCorporationCorporationIdMiningObservers200Ok>> {
        const response = await this.getCorporationCorporationIdMiningObserversRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Paginated record of all mining seen by an observer  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant
     * Observed corporation mining
     */
    async getCorporationCorporationIdMiningObserversObserverIdRaw(requestParameters: GetCorporationCorporationIdMiningObserversObserverIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCorporationCorporationIdMiningObserversObserverId200Ok>>> {
        if (requestParameters['corporationId'] == null) {
            throw new runtime.RequiredError(
                'corporationId',
                'Required parameter "corporationId" was null or undefined when calling getCorporationCorporationIdMiningObserversObserverId().'
            );
        }

        if (requestParameters['observerId'] == null) {
            throw new runtime.RequiredError(
                'observerId',
                'Required parameter "observerId" was null or undefined when calling getCorporationCorporationIdMiningObserversObserverId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-industry.read_corporation_mining.v1"]);
        }

        const response = await this.request({
            path: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/`.replace(`{${"corporation_id"}}`, encodeURIComponent(String(requestParameters['corporationId']))).replace(`{${"observer_id"}}`, encodeURIComponent(String(requestParameters['observerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCorporationCorporationIdMiningObserversObserverId200OkFromJSON));
    }

    /**
     * Paginated record of all mining seen by an observer  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant
     * Observed corporation mining
     */
    async getCorporationCorporationIdMiningObserversObserverId(requestParameters: GetCorporationCorporationIdMiningObserversObserverIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCorporationCorporationIdMiningObserversObserverId200Ok>> {
        const response = await this.getCorporationCorporationIdMiningObserversObserverIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List industry jobs run by a corporation  ---  This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Factory_Manager
     * List corporation industry jobs
     */
    async getCorporationsCorporationIdIndustryJobsRaw(requestParameters: GetCorporationsCorporationIdIndustryJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCorporationsCorporationIdIndustryJobs200Ok>>> {
        if (requestParameters['corporationId'] == null) {
            throw new runtime.RequiredError(
                'corporationId',
                'Required parameter "corporationId" was null or undefined when calling getCorporationsCorporationIdIndustryJobs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['includeCompleted'] != null) {
            queryParameters['include_completed'] = requestParameters['includeCompleted'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-industry.read_corporation_jobs.v1"]);
        }

        const response = await this.request({
            path: `/v1/corporations/{corporation_id}/industry/jobs/`.replace(`{${"corporation_id"}}`, encodeURIComponent(String(requestParameters['corporationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCorporationsCorporationIdIndustryJobs200OkFromJSON));
    }

    /**
     * List industry jobs run by a corporation  ---  This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Factory_Manager
     * List corporation industry jobs
     */
    async getCorporationsCorporationIdIndustryJobs(requestParameters: GetCorporationsCorporationIdIndustryJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCorporationsCorporationIdIndustryJobs200Ok>> {
        const response = await this.getCorporationsCorporationIdIndustryJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a list of industry facilities  ---  This route is cached for up to 3600 seconds
     * List industry facilities
     */
    async getIndustryFacilitiesRaw(requestParameters: GetIndustryFacilitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetIndustryFacilities200Ok>>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/industry/facilities/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetIndustryFacilities200OkFromJSON));
    }

    /**
     * Return a list of industry facilities  ---  This route is cached for up to 3600 seconds
     * List industry facilities
     */
    async getIndustryFacilities(requestParameters: GetIndustryFacilitiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetIndustryFacilities200Ok>> {
        const response = await this.getIndustryFacilitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return cost indices for solar systems  ---  This route is cached for up to 3600 seconds
     * List solar system cost indices
     */
    async getIndustrySystemsRaw(requestParameters: GetIndustrySystemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetIndustrySystems200Ok>>> {
        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['ifNoneMatch'] != null) {
            headerParameters['If-None-Match'] = String(requestParameters['ifNoneMatch']);
        }

        const response = await this.request({
            path: `/v1/industry/systems/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetIndustrySystems200OkFromJSON));
    }

    /**
     * Return cost indices for solar systems  ---  This route is cached for up to 3600 seconds
     * List solar system cost indices
     */
    async getIndustrySystems(requestParameters: GetIndustrySystemsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetIndustrySystems200Ok>> {
        const response = await this.getIndustrySystemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetCharactersCharacterIdIndustryJobsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdIndustryJobsDatasourceEnum = typeof GetCharactersCharacterIdIndustryJobsDatasourceEnum[keyof typeof GetCharactersCharacterIdIndustryJobsDatasourceEnum];
/**
 * @export
 */
export const GetCharactersCharacterIdMiningDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdMiningDatasourceEnum = typeof GetCharactersCharacterIdMiningDatasourceEnum[keyof typeof GetCharactersCharacterIdMiningDatasourceEnum];
/**
 * @export
 */
export const GetCorporationCorporationIdMiningExtractionsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCorporationCorporationIdMiningExtractionsDatasourceEnum = typeof GetCorporationCorporationIdMiningExtractionsDatasourceEnum[keyof typeof GetCorporationCorporationIdMiningExtractionsDatasourceEnum];
/**
 * @export
 */
export const GetCorporationCorporationIdMiningObserversDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCorporationCorporationIdMiningObserversDatasourceEnum = typeof GetCorporationCorporationIdMiningObserversDatasourceEnum[keyof typeof GetCorporationCorporationIdMiningObserversDatasourceEnum];
/**
 * @export
 */
export const GetCorporationCorporationIdMiningObserversObserverIdDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCorporationCorporationIdMiningObserversObserverIdDatasourceEnum = typeof GetCorporationCorporationIdMiningObserversObserverIdDatasourceEnum[keyof typeof GetCorporationCorporationIdMiningObserversObserverIdDatasourceEnum];
/**
 * @export
 */
export const GetCorporationsCorporationIdIndustryJobsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCorporationsCorporationIdIndustryJobsDatasourceEnum = typeof GetCorporationsCorporationIdIndustryJobsDatasourceEnum[keyof typeof GetCorporationsCorporationIdIndustryJobsDatasourceEnum];
/**
 * @export
 */
export const GetIndustryFacilitiesDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetIndustryFacilitiesDatasourceEnum = typeof GetIndustryFacilitiesDatasourceEnum[keyof typeof GetIndustryFacilitiesDatasourceEnum];
/**
 * @export
 */
export const GetIndustrySystemsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetIndustrySystemsDatasourceEnum = typeof GetIndustrySystemsDatasourceEnum[keyof typeof GetIndustrySystemsDatasourceEnum];
