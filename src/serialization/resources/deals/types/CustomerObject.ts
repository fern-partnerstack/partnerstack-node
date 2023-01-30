/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerstackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const CustomerObject: core.serialization.ObjectSchema<
    serializers.CustomerObject.Raw,
    PartnerstackApi.CustomerObject
> = core.serialization.object({
    customerKey: core.serialization.property("customer_key", core.serialization.string().optional()),
    email: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    providerKey: core.serialization.property("provider_key", core.serialization.string().optional()),
});

export declare namespace CustomerObject {
    interface Raw {
        customer_key?: string | null;
        email?: string | null;
        name?: string | null;
        provider_key?: string | null;
    }
}
