/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PartnerstackApi } from "@fern-api/partnerstack";

export type CreateDealRequestBody =
    | PartnerstackApi.CreateDealRequestBody.GroupKey
    | PartnerstackApi.CreateDealRequestBody.PartnerKey
    | PartnerstackApi.CreateDealRequestBody._Unknown;

export declare namespace CreateDealRequestBody {
    interface GroupKey extends PartnerstackApi.GroupKey, _Utils {
        type: "group_key";
    }

    interface PartnerKey extends PartnerstackApi.PartnerKey, _Utils {
        type: "partner_key";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: PartnerstackApi.CreateDealRequestBody._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        groupKey: (value: PartnerstackApi.GroupKey) => _Result;
        partnerKey: (value: PartnerstackApi.PartnerKey) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const CreateDealRequestBody = {
    groupKey: (value: PartnerstackApi.GroupKey): PartnerstackApi.CreateDealRequestBody.GroupKey => {
        return {
            ...value,
            type: "group_key",
            _visit: function <_Result>(
                this: PartnerstackApi.CreateDealRequestBody.GroupKey,
                visitor: PartnerstackApi.CreateDealRequestBody._Visitor<_Result>
            ) {
                return PartnerstackApi.CreateDealRequestBody._visit(this, visitor);
            },
        };
    },

    partnerKey: (value: PartnerstackApi.PartnerKey): PartnerstackApi.CreateDealRequestBody.PartnerKey => {
        return {
            ...value,
            type: "partner_key",
            _visit: function <_Result>(
                this: PartnerstackApi.CreateDealRequestBody.PartnerKey,
                visitor: PartnerstackApi.CreateDealRequestBody._Visitor<_Result>
            ) {
                return PartnerstackApi.CreateDealRequestBody._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): PartnerstackApi.CreateDealRequestBody._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: PartnerstackApi.CreateDealRequestBody._Unknown,
                visitor: PartnerstackApi.CreateDealRequestBody._Visitor<_Result>
            ) {
                return PartnerstackApi.CreateDealRequestBody._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: PartnerstackApi.CreateDealRequestBody,
        visitor: PartnerstackApi.CreateDealRequestBody._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "group_key":
                return visitor.groupKey(value);
            case "partner_key":
                return visitor.partnerKey(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
