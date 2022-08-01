import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Episode extends ConvectorModel<Episode> {
  @ReadOnly()
  @Required()
  public readonly type = 'episode';
  
  @Required()
  @Validate(yup.string())
  public version: string;
  public originVersion: string;

  @Required()
  @Validate(yup.bool())
  public active: boolean;
  @Required()
  @Validate(yup.string())
  public bundleDefinitionId: string;
  @Required()
  @Validate(yup.string())
  public bundleName: string;
  @Validate(yup.string())
  public bundleType: string;
  @Required()
  @Validate(yup.string())
  public bundleCategory: string;
  @Required()
  @Validate(yup.string())
  public bundleSubCategory: string;
  @Required()
  @Validate(yup.string())
  public definitionSource: string;
  
  public definitionCondition: string;
  @Required()
  @Validate(yup.string())
  public definitionSuperClass: string;
  @Required()
  @Validate(yup.string())
  public definitionCreationDate: string;
  @Required()
  @Validate(yup.string())
  public definitionVersion: string;
  @Validate(yup.string())
  public engineVersion: string;
  @Validate(yup.number())
  public lookBack: number;
  @Validate(yup.number())
  public lookForward: number;
  public triggerWindowExcludesFromDate: boolean;
  public triggerWindowExcludesThruDate: boolean;
  @Validate(yup.number())
  public riskFactorLookBack: number;
  @Validate(yup.number())
  public riskFactorLookForward: number;
  public primaryAndSecondarySameClaim: boolean;
  @Validate(yup.number())
  public primaryAndSecondarySeparationMin: number;
  @Validate(yup.number())
  public primaryAndSecondarySeparationMax: number;
  @Validate(yup.bool())
  public primaryAndSecondaryOverlap: boolean;
  @Validate(yup.bool())
  public truncateLookForwardByDeath: boolean;
  @Validate(yup.bool())
  public annualize: boolean;
  @Validate(yup.string())
  public annualizePeriod: string;
  @Validate(yup.bool())
  public primaryAndSecondarySameClaimLine: boolean;
  @Validate(yup.bool())
  public multipleSameBundleEpisodes: boolean;
  @Validate(yup.bool())
  public triggerByAuth: boolean;
  @Validate(yup.bool())
  public useTriggerFacilityClaimForWindow: boolean;
  @Validate(yup.bool())
  public includeTriggerIndicatorClaims: boolean;
  @Validate(yup.bool())
  public countMemberEligibleDays: boolean;
  @Validate(yup.array())
  public runIsAssignedOnInvalidEpisodes: string[];
  public extendLookForwards: {
      providerCategory: string[];
      providerSubCategory: string[];
      useHeaderDates: boolean;
  }[];
  @Validate(yup.object())
  public eligibilityFactors: {
      ageAtTrigger: {
          minAge: number;
          maxAge: number;
      };
      gender: string;
  };
  @Required()
  @Validate(yup.array())
  public triggerIndicators: TriggerIndicatorRule[];
  @Validate(yup.array())
  public inclusions: InclusionRule[];
  @Validate(yup.array())
  public exclusions: ExclusionRule[];
  public exclusionsByAmount: ExclusionByAmountRule[];
  @Validate(yup.array())
  public bundleInclusions: BundleInclusionRule[];
  @Validate(yup.array())
  public bundleExclusions: BundleExclusionRule[];
  @Validate(yup.array())
  public terminateEpisodeCodes: TerminationRule[];
  @Validate(yup.array())
  public terminateByEnrollmentGapLength: TerminateByEGLRule[];
  
  public terminateByLength: TerminateByLengthRule[];
  @Validate(yup.object())
  public terminateByEnrollmentGap: {
      inLookBack: boolean;
      inLookForward: boolean;
      inRiskFactorLookForward: boolean;
      inRiskFactorLookBack: boolean;
      onTriggerFromDate: boolean;
      onTriggerThruDate: boolean;
      inTriggerWindow: boolean;
  };
  @Validate(yup.object())
  public terminateByEnrollmentGapInProgram: {
      inLookBack: boolean;
      inLookForward: boolean;
      inRiskFactorLookForward: boolean;
      inRiskFactorLookBack: boolean;
      onTriggerFromDate: boolean;
      onTriggerThruDate: boolean;
      inTriggerWindow: boolean;
  };
  public terminateByEligibilityFactors: {
      terminateByEligibilityFactorIndex: string;
      eligibilityFactorType: string;
      eligibilityFactorValues: string[];
      eligibilityAndWindowOverlapRequired: boolean;
      inLookForward: boolean;
      inLookBack: boolean;
      onTriggerFromDate: boolean;
      onTriggerThruDate: boolean;
      inRiskFactorLookBack: boolean;
      inRiskFactorLookForward: boolean;
      inTriggerWindow: boolean;
  }[];
  public terminateByDeath: {
      inRiskFactorLookBack: boolean;
      inRiskFactorLookForward: boolean;
      inLookBack: boolean;
      inTriggerWindow: boolean;
      onTriggerFromDate: boolean;
      onTriggerThruDate: boolean;
      inLookForward: boolean;
  };
  @Validate(yup.object())
  public riskFactors: {
      codeRiskFactors: RiskFactorRule[];
      ageRiskFactors: RiskFactorAgeRule[];
  };
  @Validate(yup.array())
  public episodeTags: string[];
  @Validate(yup.object())
  public pricing: {
      splitCost: boolean;
      standardizedCosts: PricingStandardizedCostRule[];
      prorations: PricingRule[];
  };
  public flags: FlagRule[];
  @Validate(yup.array())
  public variations: Variation[];
}

class BundleInclusionRule {
  public bundleInclusionIndex: string;
  public bundleDefinitionIncluded: string;
  public inclusionType: string;
}

class BundleExclusionRule {
  public bundleExclusionIndex: string;
  public bundleDefinitionExcluded: string;
}

class TriggerIndicatorRule {
  public triggerIndicatorIndex: string;
  public triggerWindowMethod: string;
  public indicatorSeparationMax: number;
  public indicatorOverlap: boolean;
  public indicatorType: string;
  public indicatorSameClaim: boolean;
  public indicatorSameClaimLine: boolean;
  public indicators: {
      indicatorIndex: string;
      providerCategory: string[];
      providerSubCategory: string[];
      placeOfService: string[];
      referenceIndicator: boolean;
      useHeaderDates: boolean;
      triggerCodes: {
          codeType: string;
          codes: string[];
          modifier: string[];
          severity: string;
          position: string;
      }[];
  }[];
}

class InclusionRule {
  public inclusionIndex: string;
  public codeType: string;
  public codes: string[];
  public modifier: string[];
  public severity: string;
  public position: string;
  public placesOfService: string[];
  public providerCategory: string[];
  public providerSubCategory: string[];
  public minDate: string;
  public maxDate: string;
  public lookForwardMin: number;
  public lookForwardMax: number;
  public lookBackMin: number;
  public lookBackMax: number;
  public isComplication: boolean;
  public isReadmission: boolean;
  public isTriggerProvider: boolean;
  public isSufficient: boolean;
  public isSufficientType: string;
  public isSufficientEnablers: string[];
  public inLookForward: boolean;
  public inLookBack: boolean;
  public inTriggerWindow: boolean;
  public onTriggerFromDate: boolean;
  public onTriggerThruDate: boolean;
  public includeAllClaimLines: boolean;
  public useHeaderDates: boolean;
  public useHeaderDatesForEnabler: boolean;
  public repeatProcedure: boolean;
  public isEnablerIncluded: boolean;
}

class ExclusionRule {
  public exclusionIndex: string;
  public codeType: string;
  public codes: string[];
  public  modifier: string[];
  public severity: string;
  public position: string;
  public providerCategory: string[];
  public providerSubCategory: string[];
  public placesOfService: string[];
  public minDate: string;
  public maxDate: string;
  public lookForwardMin: number;
  public lookForwardMax: number;
  public lookBackMin: number;
  public lookBackMax: number;
  public isSufficient: boolean;
  public isSufficientType: string;
  public isSufficientEnablers: string[];
  public inLookForward: boolean;
  public inLookBack: boolean;
  public inTriggerWindow: boolean;
  public onTriggerFromDate: boolean;
  public onTriggerThruDate: boolean;
  public excludeAllClaimLines: boolean;
  public useHeaderDates: boolean;
  public useHeaderDatesForEnablers: boolean;
}

class ExclusionByAmountRule {
  public exclusionIndex: string;
  public amountType: string;
  public minAmount: number;
  public maxAmount: number;
}

class RiskFactorRule {
  public riskFactorIndex: string;
  public codeType: string;
  public codes: string[];
  public modifier: string[];
  public position: string;
  public inLookBack: boolean;
  public inLookForward: boolean;
  public inRiskFactorLookBack: boolean;
  public inRiskFactorLookForward: boolean;
  public riskFactorLookForwardMin: number;
  public riskFactorLookForwardMax: number;
  public riskFactorLookBackMin: number;
  public riskFactorLookBackMax: number;
  public useHeaderDates: boolean;
  public inTriggerWindow: boolean;
  public onTriggerFromDate: boolean;
  public onTriggerThruDate: boolean;
  public operator: string;
  public amount: number;
}

class RiskFactorAgeRule {
  public minAge: number;
  public maxAge: number;
  public amount: number;
  public operator: string;
}

class  TerminationRule {
  public terminateCodesIndex: string;
  public codeType: string;
  public codes: string[];
  public modifier: string[];
  public severity: string;
  public position: string;
  public lookForwardMin: number;
  public lookForwardMax: number;
  public lookBackMin: number;
  public lookBackMax: number;
  public isTriggerClaim: boolean;
  public isSufficient: boolean;
  public isSufficientType: string;
  public isSufficientEnablers: string[];
  public inRiskFactorLookBack: boolean;
  public inRiskFactorLookForward: boolean;
  public inLookBack: boolean;
  public inLookForward: boolean;
  public inTriggerWindow: boolean;
  public onTriggerFromDate: boolean;
  public onTriggerThruDate: boolean;
  public providerCategory: string[];
  public providerSubCategory: string[];
  public placesOfService: string[];
  public useHeaderDatesForEnabler: boolean;
}

class  TerminateByEGLRule {
  public terminateByEnrollmentGapLengthIndex: string;
  public episodeLengthMax: number;
  public enrollmentGapLength: number;
}

class  TerminateByLengthRule {
  public terminateLengthIndex: string;
  public windowElementType: string;
  public terminateLength: number;
}

class  PricingRule {
  public prorationIndex: string;
  public providerCategory: string[];
  public providerSubCategory: string[];
  public prorateType: string;
  public proratePlus: number;
  public useHeaderDates: boolean;
  public revenueCodes: string[];
}

class PricingStandardizedCostRule {
  public codeType: string;
  public codes: string[];
  public modifier: string[];
  public severity: string;
  public position: string;
  public providerCategory: string[];
  public providerSubCategory: string[];
  public placesOfService: string[];
  public standardizedCost: number;
}

class  FlagRule {
  public flagIndex: string;
  public codeType: string;
  public codes: string[];
  public position: string;
  public modifier: string[];
  public severity: string;
  public placesOfService: string[];
  public providerCategory: string[];
  public providerSubcategory: string[];
  public flagList: string[];
  public claimLevelFlag: boolean;
  public isAntiEnabled: boolean;
  public isSufficient: boolean;
  public inLookBack: boolean;
  public inLookForward: boolean;
  public inTriggerWindow: boolean;
  public onTriggerFromDate: boolean;
  public onTriggerThruDate: boolean;
  public useHeaderDates: boolean;
}

class Variation {
  public type: string;
  public triggerIndicators: { [key: string]: any}[];
}