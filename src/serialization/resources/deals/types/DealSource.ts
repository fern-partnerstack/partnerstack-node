/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PartnerstackApi } from "@fern-api/partnerstack";
import * as core from "../../../../core";

export const DealSource: core.serialization.Schema<serializers.DealSource.Raw, PartnerstackApi.DealSource> =
    core.serialization.enum_(["partner", "vendor"]);

export declare namespace DealSource {
    type Raw = "partner" | "vendor";
}
