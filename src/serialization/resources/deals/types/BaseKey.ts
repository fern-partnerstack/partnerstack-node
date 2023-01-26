/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerstackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const BaseKey: core.serialization.ObjectSchema<serializers.BaseKey.Raw, PartnerstackApi.BaseKey> =
    core.serialization.object({
        accountName: core.serialization.property("account_name", core.serialization.string().optional()),
        amount: core.serialization.number().optional(),
        closeDate: core.serialization.property("close_date", core.serialization.string().optional()),
        contactFirstName: core.serialization.property("contact_first_name", core.serialization.string().optional()),
        contactLastName: core.serialization.property("contact_last_name", core.serialization.string().optional()),
        externalKey: core.serialization.property("external_key", core.serialization.string().optional()),
        fields: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).FieldData))
            .optional(),
        lostReason: core.serialization.property("lost_reason", core.serialization.string().optional()),
        moldKey: core.serialization.property("mold_key", core.serialization.string().optional()),
        source: core.serialization.lazy(async () => (await import("../../..")).DealSource).optional(),
        stage: core.serialization.string().optional(),
    });

export declare namespace BaseKey {
    interface Raw {
        account_name?: string | null;
        amount?: number | null;
        close_date?: string | null;
        contact_first_name?: string | null;
        contact_last_name?: string | null;
        external_key?: string | null;
        fields?: serializers.FieldData.Raw[] | null;
        lost_reason?: string | null;
        mold_key?: string | null;
        source?: serializers.DealSource.Raw | null;
        stage?: string | null;
    }
}
