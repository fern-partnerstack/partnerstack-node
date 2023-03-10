/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const RecordActionRequestBody: core.serialization.ObjectSchema<
    serializers.RecordActionRequestBody.Raw,
    PartnerStackApi.RecordActionRequestBody
> = core.serialization.object({
    externalKey: core.serialization.property("external_key", core.serialization.string().optional()),
    targetKey: core.serialization.property("target_key", core.serialization.string().optional()),
    targetType: core.serialization.property(
        "target_type",
        core.serialization.lazy(async () => (await import("../../..")).TargetType).optional()
    ),
    type: core.serialization.string().optional(),
    value: core.serialization.number().optional(),
});

export declare namespace RecordActionRequestBody {
    interface Raw {
        external_key?: string | null;
        target_key?: string | null;
        target_type?: serializers.TargetType.Raw | null;
        type?: string | null;
        value?: number | null;
    }
}
