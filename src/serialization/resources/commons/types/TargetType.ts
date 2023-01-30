/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerStackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const TargetType: core.serialization.Schema<serializers.TargetType.Raw, PartnerStackApi.TargetType> =
    core.serialization.enum_(["partnership", "customer"]);

export declare namespace TargetType {
    type Raw = "partnership" | "customer";
}
