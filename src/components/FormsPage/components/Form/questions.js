const questions = {
  "domestic.protective.eligibility": {
    questions: [
      {
        key: "bool1",
        type: "bool",
        text:
          "Were you and your abuser married, residing together, in a substantive dating or engagement relationship, related by blood or marriage, or have a child in common?"
      },
      {
        key: "bool2",
        type: "bool",
        text:
          "Are you suffering from abuse because your abuser has harmed or attempted to harm you physically, or put you in fear of imminent serious physical harm, or caused you to engage in sexual relations involuntarily by using force, threat or duress?"
      },
      {
        key: "bool3",
        type: "bool",
        text:
          "Are you currently living within the geographical area of this court, or used to live within the geographical area of this court but you left to avoid abuse?"
      }
    ],
    name: "Protective Order Eligibilty Form",
    submit: () => {
      return;
    }
  },
  "domestic.protective.plaintiffinfo": {},
  "domestic.protective.defendantinfo": {},
  "domestic.protective.209a": {},
  "domestic.protective.affadavit": {}
};

export default questions;
