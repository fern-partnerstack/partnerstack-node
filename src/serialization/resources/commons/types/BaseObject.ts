/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const BaseObject: core.serialization.ObjectSchema<serializers.BaseObject.Raw, PartnerStackApi.BaseObject> =
    core.serialization.object({
        createdAt: core.serialization.property("created_at", core.serialization.number().optional()),
        key: core.serialization.string().optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.number().optional()),
    });

export declare namespace BaseObject {
    interface Raw {
        created_at?: number | null;
        key?: string | null;
        updated_at?: number | null;
    }
}
