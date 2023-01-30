/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const DealFilesResponse: core.serialization.ObjectSchema<
    serializers.DealFilesResponse.Raw,
    PartnerStackApi.DealFilesResponse
> = core.serialization
    .object({
        data: core.serialization.lazyObject(async () => (await import("../../..")).DealFilesData),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseResponse));

export declare namespace DealFilesResponse {
    interface Raw extends serializers.BaseResponse.Raw {
        data: serializers.DealFilesData.Raw;
    }
}
