/**
 * Animation constants and configurations
 *
 */

const ANIMATION_DELAY = 1000;
const ANIMATION_DELAY_FAST = 600;
const LINE_COLOR = '#1ce0e1';
const MEDIUM_TYPE_SPEED = 30;
const FAST_TYPE_SPEED = 15;

const GUIDANCE_TEXT = 'Fill this guidance area with information regarding each activity once selected. Fill this guidance area with ' +
    'information regarding each activity once selected. Fill this guidance area with information regarding each activity once selected.'

const OUTPUT_TEXT = 'The output of each activity is displayed here: ';

const PHASE_1_POINT_1 = 'Review incentive structures (graph if needed)';
const PHASE_1_POINT_2 = 'Review slides for accuracy';

const PHASE_2_POINT_1 = 'Review RFP letter and attachments (e.g. SOW/PWS, model contract and performance incentives/award fee plans) for accuracy and for consistency amongst documents.';
const PHASE_2_POINT_2 = 'Insure that RFP contains proposal instructions from FAR 15.408, Table 15.2 and AFFARS MP 5315.4 along with a Proposal Adequacy Checklist (PAC) - DFARS 252.215-7009';
const PHASE_2_POINT_3 = 'Review acquisition schedule to insure listed dates are reasonable';

const PHASE_3_POINT_1 = 'Using established PKF pricing metrics for times, develop an acquisition schedule utilizing the receipt of proposal date from the RFP as the starting point and projected award date as the end';
const PHASE_3_POINT_2 = 'Ascertain whether the PMO will need to receive technical evaluation (tech eval) training and if so, tailor tech eval training slides template for the particular acquisition and provide training';
const PHASE_3_POINT_3 = 'Depending on the amount and nature of the acquisition, you may need to engage the services of the DCMA ICAT/CAG discuss with PCO and PKF management';
const PHASE_3_POINT_4 = 'SETAs do not have access to DCMA repository (CBAR) for contractor rates, therefore contact the SMC DCMA liaison (Steve Trinh) and request rates for the prime contractor and major subcontractors';
const PHASE_3_POINT_5 = 'If effort is a follow on, start the process of obtaining historical data (actuals) for the previous contracts.  Contact buyer/PCO for ConWrite data, if contract was FPI, CPFF, CPIF or CPAF contact EVM specialist, for FFP type contracts contact cognizant DCAA office for incurred cost claim, request data from contractor ';
const PHASE_3_POINT_6 = 'Analyze actuals by ascertaining if there are any differences in scope between the current effort and previous efforts.  Discuss any differences in scope with PMO.';
const PHASE_3_POINT_7 = 'Obtain negotiated profit rates from previous contracts for the same requirement or from similar type efforts.';
const PHASE_3_POINT_8 = 'Calculate realized profit rates utilizing actuals for completed prior contracts';

const PHASE_4_POINT_1 = 'Review proposal for adequacy - check for completeness (proposal complies with instructions listed in FAR table 15.2 and AFFARS MP 5315.4, PAC is completed).  If proposal is inadequate, discuss with PCO and PKF management for direction/guidance';
const PHASE_4_POINT_2 = 'Review the Excel cost model for functionality.  Ensure models contain working formulas displayed in an base x rates = dollars format, with amounts aggregated by contractor fiscal year, rolled up into a total program';
const PHASE_4_POINT_3 = 'Insure the cost model contains a consolidated bill of material (CBOM) that is sortable';
const PHASE_4_POINT_4 = 'Modify contractor\'s cost model to utilize appropriate rates and factors, to accommodate adjustments to hours, subcontracts/material amounts and other direct costs, and format for use in the PNMs/business clearance charts';
const PHASE_4_POINT_5 = 'If proposal also contains deleted work and/or deleted work already performed (DWAP) each must be in the same format proscribed in the previous step.  Contractor is not permitted to propose net amounts  ';
const PHASE_4_POINT_6 = 'Insure contractor has provided DD Form 1861s for itself and for all interdivisional efforts';
const PHASE_4_POINT_7 = 'Insure contractor has included subcontractor sanitized proposals and appropriate analyses (as required)';
const PHASE_4_POINT_8 = 'Insure receipt of unsanitized subcontractor proposals containing certified cost and pricing data';
const PHASE_4_POINT_9 = 'Based upon analysis of actuals accomplished in the pre-proposal phase, compare actuals with proposal';
const PHASE_4_POINT_10 = 'Determine which rates the contractor is proposing (FPRA, FPRR, FPRP, other)';
const PHASE_4_POINT_11 = 'Accept proposed rates if proposed rates are from either the FPRA or FPRR.  If contractor proposes using rates from the FPRP, use rates from FPRR.  ';
const PHASE_4_POINT_12 = 'Verify FPRA or FPRR cover the entire period of performance?  If DCMA cannot provide a recommendation for out years, labor rates can be escalated using Global Insight ';
const PHASE_4_POINT_13 = 'If DCMA cannot provide recommendations for indirect rates (to include out years), use trend analysis to develop rates thru comparisons of previous FPRP submittals with developed FPRR or negotiated FPRA rates or by comparing FPRP rates with final realized rates';
const PHASE_4_POINT_14 = 'Insure that proposal tracks back to supporting documentation (e.g. proposed subcontract amounts track to pricing memorandum which tracks to subcontractor sanitized which should track to the unsanitized proposals) ';
const PHASE_4_POINT_15 = 'Be prepared to attend the proposal walk-through utilizing the checklist contained in AFMC PGI 5315.402-90';
const PHASE_4_POINT_16 = 'Contact the PCO/buyer and request that they complete the applicable sections of the Pre-PNM up to the pricing section';
const PHASE_4_POINT_17 = 'If travel is proposed, review per diem rates, air fares and rental car expenses and compare to GSA per diem rates and online resources for air fare and rental car costs';

const PHASE_5_POINT_1 = 'Upon receipt  of the tech eval, review to insure that it is actionable by reviewing for accuracy - ' +
    'tech eval proposed amounts match amounts contained in proposal consistency - exception amounts (hours, material quantities, ' +
    'trips, etc.) are supported in the write up math errors and insuring that both a bottoms up and top down analyses have ' +
    'been performed and that the results are consistent with one another the tech eval has addressed any bid stipulations ' +
    'contained in the proposal the tech eval contains an adequate risk assessment for both technical and management/cost control considerations';
const PHASE_5_POINT_2 = 'Compare results of your analysis with that of the tech eval - explore any significant differences. Discuss differences with PMO.  If differences cannot be resolved, discuss with PKF management';

const PHASE_6_POINT_1 = 'Incorporate the results of the tech eval or results of your own labor hour analysis and input into the modified cost model';
const PHASE_6_POINT_2 = 'Review field pricing reports for accuracy and reasonableness/validity of questioned costs.  Resolve any discrepancies or issues with the basis of any questioned cost';
const PHASE_6_POINT_3 = 'Input field pricing recommendations results into the modified cost model.  Any deviation from field pricing recommendations must be fully supported';
const PHASE_6_POINT_4 = 'Incorporate any other pricer analysis (e.g. travel costs)';
const PHASE_6_POINT_5 = 'Using the weighted guidelines program, calculate the profit utilizing the dollar amounts developed for the AFO, the tech eval risk assessment and guidance from DFARS 215-404-71';

const PHASE_7_POINT_1 = 'Insure that PCO/buyer have properly completed the applicable portions of the PrePNM';
const PHASE_7_POINT_2 = 'Complete the pricing portion of PrePNM IAW the AF PNM Guide (SMC PNM Guide?)';
const PHASE_7_POINT_3 = 'Insure the AFO position is fully documented and the rationale for any deviations from the field pricing recommendations is fully supported';
const PHASE_7_POINT_4 = 'Submit PrePnm to the appropriate PKF reviewer';
const PHASE_7_POINT_5 = 'The PrePNM may be submitted to the PCO concurrently with the PKF reviewer subject to PKF reviewer approval, however the PrePNM must be watermarked as draft';
const PHASE_7_POINT_6 = 'BC charts are to be completed IAW BC template.  Note: PKF management had previously stated that charts should be done first followed by the PrePNM';
const PHASE_7_POINT_7 = 'The PCO/buyer and PMO are responsible for the charts up to the pricing portion.  Pricer will need to review all the slides but focusing on those charts that specifically affect the pricing portion ';
const PHASE_7_POINT_8 = 'Charts should be displayed in a bullet format';
const PHASE_7_POINT_9 = 'Charts should be succinct; avoid writing in a passive voice; Additional information may be placed in the notes or in backup slides';

const PHASE_8_POINT_1 = 'Thoroughly prepare for the pre-briefing with the PKF Chief, dry run with SPO and clearance briefing with the BCAA by ' +
    'Having a complete understanding of the requirement and differences from the previous requirement if its a follow on contract or what has changed if it\'s a modification (Know what you are buying!) ' +
    'Having a detailed understanding of how the effort was proposed Making sure that you are able to answer questions ' +
    'regarding any individual element of cost; e.g. you need to be able to describe what a factored labor or ODC activity ' +
    'entails rather than to simply say the factor is DCMA approved Knowing the negotiated profit and realized profit ' +
    'rates for previous or similar efforts Being able to defend your position, understand exceptions taken by the tech ' +
    'eval and/or field pricing.  Don\'t depend on the PMO helping out if the BCAA questions the position on hours';

const PHASE_9_POINT_1 = 'Understand the pricer is part of the Air Force Negotiation Team (AFNT) and no two teams are the same.  ';
const PHASE_9_POINT_2 = 'Ideally the PCO, PM and the pricer will work as a team during negotiations.  ';
const PHASE_9_POINT_3 = 'If the PCO is weak or lacks experience, you will have to assume the team lead - do not let the PM take charge of the negotiations';
const PHASE_9_POINT_4 = 'If the PCO (and PM) attempt to make concessions in hours and/or profit very quickly without obtaining concessions from the contractor and it appears they are trying to arrive at the objective/clearance positions - push back and inform PKF management';
const PHASE_9_POINT_5 = 'Do not horse trade - offers and counter offers should reflect specific adjustments to the individual elements of cost and to profit.  Critical for cost and FPI type contracts where you must reach agreement on cost and fee/profit' +
    ' Document not only the change at CLIN level but at the task level; e.g. an increase in CLIN 0001 hours for labor code ABCD is a result of increasing ABCD hours for task TAAA' +
    ' Save each offer (cost model) as a separate file; e.g. Offer01, Offer02 …';
const PHASE_9_POINT_6 = 'Upon conclusion of negotiations - insure that the certificate of current cost or pricing is current, accurate and complete and contains no qualifying language';

const PHASE_10_POINT_1 = 'Make sure to fully document the results of the negotiation - since it may be used by others as a basis for future negotiations or reviewed by other interested parties';


