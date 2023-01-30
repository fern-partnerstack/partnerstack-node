/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const BaseResponse: core.serialization.ObjectSchema<serializers.BaseResponse.Raw, PartnerStackApi.BaseResponse> =
    core.serialization.object({
        message: core.serialization.string(),
        status: core.serialization.number(),
    });

export declare namespace BaseResponse {
    interface Raw {
        message: string;
        status: number;
    }
}
