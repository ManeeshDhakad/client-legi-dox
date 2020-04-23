var configObject = {};

if(LOCAL) {
    configObject = {
        "TEST_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/test",
        "API_MAP_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/map",
        "API_ALL_DOCS_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/allDocs"
    }
} else if(DEV) {
    configObject = {
        "TEST_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/test",
        "API_MAP_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/map",
        "API_ALL_DOCS_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/allDocs"
    }

} else if(TEST) {
    configObject = {
        "TEST_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/test",
        "API_MAP_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/map",
        "API_ALL_DOCS_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/allDocs"
    }
} else if(PROD) {
    configObject = {
        "TEST_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/test",
        "API_MAP_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/map",
        "API_ALL_DOCS_URL" : "http://legidocsjavaapi-env.eba-xzpnpu2x.ap-south-1.elasticbeanstalk.com/api/allDocs"
    }
}

module.exports = configObject;