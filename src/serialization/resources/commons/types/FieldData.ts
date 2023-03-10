/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const FieldData: core.serialization.ObjectSchema<serializers.FieldData.Raw, PartnerStackApi.FieldData> =
    core.serialization.object({
        apiName: core.serialization.property("api_name", core.serialization.string().optional()),
        externalType: core.serialization.property("external_type", core.serialization.string().optional()),
        fieldKey: core.serialization.property("field_key", core.serialization.string().optional()),
        helpText: core.serialization.property("help_text", core.serialization.string().optional()),
        hidden: core.serialization.boolean().optional(),
        internalName: core.serialization.property("internal_name", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        placeholderText: core.serialization.property("placeholder_text", core.serialization.string().optional()),
        position: core.serialization.number().optional(),
        required: core.serialization.boolean().optional(),
        type: core.serialization.string().optional(),
    });

export declare namespace FieldData {
    interface Raw {
        api_name?: string | null;
        external_type?: string | null;
        field_key?: string | null;
        help_text?: string | null;
        hidden?: boolean | null;
        internal_name?: string | null;
        name?: string | null;
        placeholder_text?: string | null;
        position?: number | null;
        required?: boolean | null;
        type?: string | null;
    }
}
