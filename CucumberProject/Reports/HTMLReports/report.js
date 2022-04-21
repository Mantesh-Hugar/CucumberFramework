$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TagsDemo.feature");
formatter.feature({
  "name": "Using of tags in Cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "this  is scenario1",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario1()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "this  is scenario2",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario2()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "name": "this  is scenario3",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario3()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "name": "this  is scenario4",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario5",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "this  is scenario5",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario5()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario6",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "name": "this  is scenario6",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.TagsDemo.this_is_scenario6()"
});
formatter.result({
  "status": "passed"
});
});