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
  DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntity,
  ErrorLimited,
  Forbidden,
  GatewayTimeout,
  GetCharactersCharacterIdMail200Ok,
  GetCharactersCharacterIdMailLabelsOk,
  GetCharactersCharacterIdMailLists200Ok,
  GetCharactersCharacterIdMailMailIdNotFound,
  GetCharactersCharacterIdMailMailIdOk,
  InternalServerError,
  PostCharactersCharacterIdMailError520,
  PostCharactersCharacterIdMailLabelsLabel,
  PostCharactersCharacterIdMailMail,
  PutCharactersCharacterIdMailMailIdContents,
  ServiceUnavailable,
  Unauthorized,
} from '../models/index';
import {
    BadRequestFromJSON,
    BadRequestToJSON,
    DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntityFromJSON,
    DeleteCharactersCharacterIdMailLabelsLabelIdUnprocessableEntityToJSON,
    ErrorLimitedFromJSON,
    ErrorLimitedToJSON,
    ForbiddenFromJSON,
    ForbiddenToJSON,
    GatewayTimeoutFromJSON,
    GatewayTimeoutToJSON,
    GetCharactersCharacterIdMail200OkFromJSON,
    GetCharactersCharacterIdMail200OkToJSON,
    GetCharactersCharacterIdMailLabelsOkFromJSON,
    GetCharactersCharacterIdMailLabelsOkToJSON,
    GetCharactersCharacterIdMailLists200OkFromJSON,
    GetCharactersCharacterIdMailLists200OkToJSON,
    GetCharactersCharacterIdMailMailIdNotFoundFromJSON,
    GetCharactersCharacterIdMailMailIdNotFoundToJSON,
    GetCharactersCharacterIdMailMailIdOkFromJSON,
    GetCharactersCharacterIdMailMailIdOkToJSON,
    InternalServerErrorFromJSON,
    InternalServerErrorToJSON,
    PostCharactersCharacterIdMailError520FromJSON,
    PostCharactersCharacterIdMailError520ToJSON,
    PostCharactersCharacterIdMailLabelsLabelFromJSON,
    PostCharactersCharacterIdMailLabelsLabelToJSON,
    PostCharactersCharacterIdMailMailFromJSON,
    PostCharactersCharacterIdMailMailToJSON,
    PutCharactersCharacterIdMailMailIdContentsFromJSON,
    PutCharactersCharacterIdMailMailIdContentsToJSON,
    ServiceUnavailableFromJSON,
    ServiceUnavailableToJSON,
    UnauthorizedFromJSON,
    UnauthorizedToJSON,
} from '../models/index';

export interface DeleteCharactersCharacterIdMailLabelsLabelIdRequest {
    characterId: number;
    labelId: number;
    datasource?: DeleteCharactersCharacterIdMailLabelsLabelIdDatasourceEnum;
    token?: string;
}

export interface DeleteCharactersCharacterIdMailMailIdRequest {
    characterId: number;
    mailId: number;
    datasource?: DeleteCharactersCharacterIdMailMailIdDatasourceEnum;
    token?: string;
}

export interface GetCharactersCharacterIdMailRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdMailDatasourceEnum;
    ifNoneMatch?: string;
    labels?: Set<number>;
    lastMailId?: number;
    token?: string;
}

export interface GetCharactersCharacterIdMailLabelsRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdMailLabelsDatasourceEnum;
    ifNoneMatch?: string;
    token?: string;
}

export interface GetCharactersCharacterIdMailListsRequest {
    characterId: number;
    datasource?: GetCharactersCharacterIdMailListsDatasourceEnum;
    ifNoneMatch?: string;
    token?: string;
}

export interface GetCharactersCharacterIdMailMailIdRequest {
    characterId: number;
    mailId: number;
    datasource?: GetCharactersCharacterIdMailMailIdDatasourceEnum;
    ifNoneMatch?: string;
    token?: string;
}

export interface PostCharactersCharacterIdMailRequest {
    characterId: number;
    mail: PostCharactersCharacterIdMailMail;
    datasource?: PostCharactersCharacterIdMailDatasourceEnum;
    token?: string;
}

export interface PostCharactersCharacterIdMailLabelsRequest {
    characterId: number;
    label: PostCharactersCharacterIdMailLabelsLabel;
    datasource?: PostCharactersCharacterIdMailLabelsDatasourceEnum;
    token?: string;
}

export interface PutCharactersCharacterIdMailMailIdRequest {
    characterId: number;
    mailId: number;
    contents: PutCharactersCharacterIdMailMailIdContents;
    datasource?: PutCharactersCharacterIdMailMailIdDatasourceEnum;
    token?: string;
}

/**
 * 
 */
export class MailApi extends runtime.BaseAPI {

    /**
     * Delete a mail label  --- 
     * Delete a mail label
     */
    async deleteCharactersCharacterIdMailLabelsLabelIdRaw(requestParameters: DeleteCharactersCharacterIdMailLabelsLabelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling deleteCharactersCharacterIdMailLabelsLabelId().'
            );
        }

        if (requestParameters['labelId'] == null) {
            throw new runtime.RequiredError(
                'labelId',
                'Required parameter "labelId" was null or undefined when calling deleteCharactersCharacterIdMailLabelsLabelId().'
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

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.organize_mail.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mail/labels/{label_id}/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))).replace(`{${"label_id"}}`, encodeURIComponent(String(requestParameters['labelId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a mail label  --- 
     * Delete a mail label
     */
    async deleteCharactersCharacterIdMailLabelsLabelId(requestParameters: DeleteCharactersCharacterIdMailLabelsLabelIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCharactersCharacterIdMailLabelsLabelIdRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a mail  --- 
     * Delete a mail
     */
    async deleteCharactersCharacterIdMailMailIdRaw(requestParameters: DeleteCharactersCharacterIdMailMailIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling deleteCharactersCharacterIdMailMailId().'
            );
        }

        if (requestParameters['mailId'] == null) {
            throw new runtime.RequiredError(
                'mailId',
                'Required parameter "mailId" was null or undefined when calling deleteCharactersCharacterIdMailMailId().'
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

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.organize_mail.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mail/{mail_id}/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))).replace(`{${"mail_id"}}`, encodeURIComponent(String(requestParameters['mailId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a mail  --- 
     * Delete a mail
     */
    async deleteCharactersCharacterIdMailMailId(requestParameters: DeleteCharactersCharacterIdMailMailIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCharactersCharacterIdMailMailIdRaw(requestParameters, initOverrides);
    }

    /**
     * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards  ---  This route is cached for up to 30 seconds
     * Return mail headers
     */
    async getCharactersCharacterIdMailRaw(requestParameters: GetCharactersCharacterIdMailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCharactersCharacterIdMail200Ok>>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdMail().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['datasource'] != null) {
            queryParameters['datasource'] = requestParameters['datasource'];
        }

        if (requestParameters['labels'] != null) {
            queryParameters['labels'] = Array.from(requestParameters['labels'])!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['lastMailId'] != null) {
            queryParameters['last_mail_id'] = requestParameters['lastMailId'];
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.read_mail.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mail/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCharactersCharacterIdMail200OkFromJSON));
    }

    /**
     * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards  ---  This route is cached for up to 30 seconds
     * Return mail headers
     */
    async getCharactersCharacterIdMail(requestParameters: GetCharactersCharacterIdMailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCharactersCharacterIdMail200Ok>> {
        const response = await this.getCharactersCharacterIdMailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a list of the users mail labels, unread counts for each label and a total unread count.  ---  This route is cached for up to 30 seconds
     * Get mail labels and unread counts
     */
    async getCharactersCharacterIdMailLabelsRaw(requestParameters: GetCharactersCharacterIdMailLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCharactersCharacterIdMailLabelsOk>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdMailLabels().'
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.read_mail.v1"]);
        }

        const response = await this.request({
            path: `/v3/characters/{character_id}/mail/labels/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCharactersCharacterIdMailLabelsOkFromJSON(jsonValue));
    }

    /**
     * Return a list of the users mail labels, unread counts for each label and a total unread count.  ---  This route is cached for up to 30 seconds
     * Get mail labels and unread counts
     */
    async getCharactersCharacterIdMailLabels(requestParameters: GetCharactersCharacterIdMailLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCharactersCharacterIdMailLabelsOk> {
        const response = await this.getCharactersCharacterIdMailLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return all mailing lists that the character is subscribed to  ---  This route is cached for up to 120 seconds
     * Return mailing list subscriptions
     */
    async getCharactersCharacterIdMailListsRaw(requestParameters: GetCharactersCharacterIdMailListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetCharactersCharacterIdMailLists200Ok>>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdMailLists().'
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.read_mail.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mail/lists/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetCharactersCharacterIdMailLists200OkFromJSON));
    }

    /**
     * Return all mailing lists that the character is subscribed to  ---  This route is cached for up to 120 seconds
     * Return mailing list subscriptions
     */
    async getCharactersCharacterIdMailLists(requestParameters: GetCharactersCharacterIdMailListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetCharactersCharacterIdMailLists200Ok>> {
        const response = await this.getCharactersCharacterIdMailListsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return the contents of an EVE mail  ---  This route is cached for up to 30 seconds
     * Return a mail
     */
    async getCharactersCharacterIdMailMailIdRaw(requestParameters: GetCharactersCharacterIdMailMailIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCharactersCharacterIdMailMailIdOk>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling getCharactersCharacterIdMailMailId().'
            );
        }

        if (requestParameters['mailId'] == null) {
            throw new runtime.RequiredError(
                'mailId',
                'Required parameter "mailId" was null or undefined when calling getCharactersCharacterIdMailMailId().'
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
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.read_mail.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mail/{mail_id}/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))).replace(`{${"mail_id"}}`, encodeURIComponent(String(requestParameters['mailId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCharactersCharacterIdMailMailIdOkFromJSON(jsonValue));
    }

    /**
     * Return the contents of an EVE mail  ---  This route is cached for up to 30 seconds
     * Return a mail
     */
    async getCharactersCharacterIdMailMailId(requestParameters: GetCharactersCharacterIdMailMailIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCharactersCharacterIdMailMailIdOk> {
        const response = await this.getCharactersCharacterIdMailMailIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create and send a new mail  --- 
     * Send a new mail
     */
    async postCharactersCharacterIdMailRaw(requestParameters: PostCharactersCharacterIdMailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling postCharactersCharacterIdMail().'
            );
        }

        if (requestParameters['mail'] == null) {
            throw new runtime.RequiredError(
                'mail',
                'Required parameter "mail" was null or undefined when calling postCharactersCharacterIdMail().'
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

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.send_mail.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mail/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCharactersCharacterIdMailMailToJSON(requestParameters['mail']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Create and send a new mail  --- 
     * Send a new mail
     */
    async postCharactersCharacterIdMail(requestParameters: PostCharactersCharacterIdMailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.postCharactersCharacterIdMailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a mail label  --- 
     * Create a mail label
     */
    async postCharactersCharacterIdMailLabelsRaw(requestParameters: PostCharactersCharacterIdMailLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling postCharactersCharacterIdMailLabels().'
            );
        }

        if (requestParameters['label'] == null) {
            throw new runtime.RequiredError(
                'label',
                'Required parameter "label" was null or undefined when calling postCharactersCharacterIdMailLabels().'
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

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.organize_mail.v1"]);
        }

        const response = await this.request({
            path: `/v2/characters/{character_id}/mail/labels/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCharactersCharacterIdMailLabelsLabelToJSON(requestParameters['label']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Create a mail label  --- 
     * Create a mail label
     */
    async postCharactersCharacterIdMailLabels(requestParameters: PostCharactersCharacterIdMailLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.postCharactersCharacterIdMailLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update metadata about a mail  --- 
     * Update metadata about a mail
     */
    async putCharactersCharacterIdMailMailIdRaw(requestParameters: PutCharactersCharacterIdMailMailIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['characterId'] == null) {
            throw new runtime.RequiredError(
                'characterId',
                'Required parameter "characterId" was null or undefined when calling putCharactersCharacterIdMailMailId().'
            );
        }

        if (requestParameters['mailId'] == null) {
            throw new runtime.RequiredError(
                'mailId',
                'Required parameter "mailId" was null or undefined when calling putCharactersCharacterIdMailMailId().'
            );
        }

        if (requestParameters['contents'] == null) {
            throw new runtime.RequiredError(
                'contents',
                'Required parameter "contents" was null or undefined when calling putCharactersCharacterIdMailMailId().'
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

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("evesso", ["esi-mail.organize_mail.v1"]);
        }

        const response = await this.request({
            path: `/v1/characters/{character_id}/mail/{mail_id}/`.replace(`{${"character_id"}}`, encodeURIComponent(String(requestParameters['characterId']))).replace(`{${"mail_id"}}`, encodeURIComponent(String(requestParameters['mailId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutCharactersCharacterIdMailMailIdContentsToJSON(requestParameters['contents']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update metadata about a mail  --- 
     * Update metadata about a mail
     */
    async putCharactersCharacterIdMailMailId(requestParameters: PutCharactersCharacterIdMailMailIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putCharactersCharacterIdMailMailIdRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const DeleteCharactersCharacterIdMailLabelsLabelIdDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type DeleteCharactersCharacterIdMailLabelsLabelIdDatasourceEnum = typeof DeleteCharactersCharacterIdMailLabelsLabelIdDatasourceEnum[keyof typeof DeleteCharactersCharacterIdMailLabelsLabelIdDatasourceEnum];
/**
 * @export
 */
export const DeleteCharactersCharacterIdMailMailIdDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type DeleteCharactersCharacterIdMailMailIdDatasourceEnum = typeof DeleteCharactersCharacterIdMailMailIdDatasourceEnum[keyof typeof DeleteCharactersCharacterIdMailMailIdDatasourceEnum];
/**
 * @export
 */
export const GetCharactersCharacterIdMailDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdMailDatasourceEnum = typeof GetCharactersCharacterIdMailDatasourceEnum[keyof typeof GetCharactersCharacterIdMailDatasourceEnum];
/**
 * @export
 */
export const GetCharactersCharacterIdMailLabelsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdMailLabelsDatasourceEnum = typeof GetCharactersCharacterIdMailLabelsDatasourceEnum[keyof typeof GetCharactersCharacterIdMailLabelsDatasourceEnum];
/**
 * @export
 */
export const GetCharactersCharacterIdMailListsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdMailListsDatasourceEnum = typeof GetCharactersCharacterIdMailListsDatasourceEnum[keyof typeof GetCharactersCharacterIdMailListsDatasourceEnum];
/**
 * @export
 */
export const GetCharactersCharacterIdMailMailIdDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type GetCharactersCharacterIdMailMailIdDatasourceEnum = typeof GetCharactersCharacterIdMailMailIdDatasourceEnum[keyof typeof GetCharactersCharacterIdMailMailIdDatasourceEnum];
/**
 * @export
 */
export const PostCharactersCharacterIdMailDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type PostCharactersCharacterIdMailDatasourceEnum = typeof PostCharactersCharacterIdMailDatasourceEnum[keyof typeof PostCharactersCharacterIdMailDatasourceEnum];
/**
 * @export
 */
export const PostCharactersCharacterIdMailLabelsDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type PostCharactersCharacterIdMailLabelsDatasourceEnum = typeof PostCharactersCharacterIdMailLabelsDatasourceEnum[keyof typeof PostCharactersCharacterIdMailLabelsDatasourceEnum];
/**
 * @export
 */
export const PutCharactersCharacterIdMailMailIdDatasourceEnum = {
    Tranquility: 'tranquility'
} as const;
export type PutCharactersCharacterIdMailMailIdDatasourceEnum = typeof PutCharactersCharacterIdMailMailIdDatasourceEnum[keyof typeof PutCharactersCharacterIdMailMailIdDatasourceEnum];
