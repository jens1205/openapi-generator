(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(1),o=n(9),i=(n(0),n(304)),r={id:"customization",title:"Customization"},l={id:"customization",title:"Customization",description:"## User-defined Templates",source:"@site/../docs/customization.md",permalink:"/docs/customization",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/customization.md",lastUpdatedBy:"Ghufran Zahidi",lastUpdatedAt:1601024054,sidebar:"docs",previous:{title:"Using Templates",permalink:"/docs/templating"},next:{title:"Debugging",permalink:"/docs/debugging"}},p=[{value:"User-defined Templates",id:"user-defined-templates",children:[]},{value:"Custom Generator (and Template)",id:"custom-generator-and-template",children:[{value:"Use your new generator with the CLI",id:"use-your-new-generator-with-the-cli",children:[]},{value:"Use your new generator with the maven plugin",id:"use-your-new-generator-with-the-maven-plugin",children:[]}]},{value:"Selective generation",id:"selective-generation",children:[]},{value:"Ignore file format",id:"ignore-file-format",children:[]},{value:"Customizing the generator",id:"customizing-the-generator",children:[]},{value:"Bringing your own models",id:"bringing-your-own-models",children:[]}],s={rightToc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"user-defined-templates"},"User-defined Templates"),Object(i.b)("p",null,"The most common scenario for user customization is to override the built-in templates with small modifications. That scenario's documentation is in our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/templating"}),"templating")," page, and differs from user-defined templates."),Object(i.b)("p",null,"Prior to release 5.0.0, whenever a user wanted to include templates which weren't built-in or weren't known to the generator at compile time, they'd need to follow the more involved approach of creating a custom generator as documented later in this document. Beginning in 5.0.0, a user may now provide additional supporting files and extensions to built-in templates via configuration. This feature requires using the external configuration file feature."),Object(i.b)("p",null,"Consider that you might want to add some static documentation such as ",Object(i.b)("inlineCode",{parentName:"p"},"AUTHORS.md")," and a custom tooling script. Rather than a single file for API definitions you also want an implementation file and a separate interface file for each."),Object(i.b)("p",null,"You might have an external configuration file named ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," which defines additional properties like this for a ",Object(i.b)("inlineCode",{parentName:"p"},"kotlin")," client generator:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'additionalProperties:\n  artifactId: kotlin-petstore-client\n  serializableModel: "true"\n  dateLibrary: java8\n')),Object(i.b)("p",null,"You would generate via CLI with the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"openapi-generator generate -g kotlin -i spec.yaml -o outdir -c config.yaml\n")),Object(i.b)("p",null,"To support the above scenario with custom templates, ensure that you're pointing to your custom template directory and add a ",Object(i.b)("inlineCode",{parentName:"p"},"files")," node with template file definitions to your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'templateDir: my_custom_templates\nadditionalProperties:\n  artifactId: kotlin-petstore-client\n  serializableModel: "true"\n  dateLibrary: java8\nfiles:\n  AUTHORS.md: {}\n  api_interfaces.mustache:\n    templateType: API\n    destinationFilename: Interface.kt\n  api.mustache:\n    templateType: API\n    destinationFilename: Impl.kt\n  other/check.mustache:\n    folder: scripts\n    destinationFilename: check.sh\n    templateType: SupportingFiles\n')),Object(i.b)("p",null,"The keys under the ",Object(i.b)("inlineCode",{parentName:"p"},"files")," node are your template filenames. These honor the same resolution order as all other templates."),Object(i.b)("p",null,"The above configuration will do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy ",Object(i.b)("inlineCode",{parentName:"li"},"my_custom_templates/AUTHORS.md")," to the generated output directory without processing via the template engine (due to template file extension). The empty object definition following ",Object(i.b)("inlineCode",{parentName:"li"},"AUTHORS.md")," allows the tool to infer the target output filename in the root of the output directory."),Object(i.b)("li",{parentName:"ul"},"Compile a user-provided ",Object(i.b)("inlineCode",{parentName:"li"},"my_custom_templates/api_interfaces.mustache")," following our usual API template compilation logic. That is, one file will be created per API; APIs are generated defined according to tags in your spec documentation. The destination filename of ",Object(i.b)("inlineCode",{parentName:"li"},"Interface.kt")," will act as a suffix for the filename. So, a tag of ",Object(i.b)("inlineCode",{parentName:"li"},"Equipment")," will output a corresponding ",Object(i.b)("inlineCode",{parentName:"li"},"EquipmentInterface.kt"),"."),Object(i.b)("li",{parentName:"ul"},"Because ",Object(i.b)("inlineCode",{parentName:"li"},"api.mustache")," is the same mustache filename as used in your target generator (",Object(i.b)("inlineCode",{parentName:"li"},"kotlin")," in this example), we support the following:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The destination filename provides a suffix for the generated output. APIs generate per tag in your specification. So, a tag of ",Object(i.b)("inlineCode",{parentName:"li"},"Equipment")," will output a corresponding ",Object(i.b)("inlineCode",{parentName:"li"},"EquipmentImpl.kt"),". This option will be used whether ",Object(i.b)("inlineCode",{parentName:"li"},"api.mustache")," targets a user customized template or a built-in template."),Object(i.b)("li",{parentName:"ul"},"The built-in template will be used if you haven't provided an customized template. The kotlin generator defines the suffix as simply ",Object(i.b)("inlineCode",{parentName:"li"},".kt"),", so this scenario would modify only the generated file suffixes according to the previous bullet point."),Object(i.b)("li",{parentName:"ul"},"Your ",Object(i.b)("inlineCode",{parentName:"li"},"api.mustache")," will be used if it exists in your custom template directory. For generators with library options, such as ",Object(i.b)("inlineCode",{parentName:"li"},"jvm-okhttp3")," in the kotlin generator, your file must exist in the same relative location as the embedded template. For kotlin using the ",Object(i.b)("inlineCode",{parentName:"li"},"jvm-okhttp3")," library option, this file would need to be located at ",Object(i.b)("inlineCode",{parentName:"li"},"my_custom_templates/libraries/jvm-okhttp/api.mustache"),". See ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/templating"}),"templating")," for more details."))),Object(i.b)("li",{parentName:"ul"},"Compile ",Object(i.b)("inlineCode",{parentName:"li"},"my_custom_templates/other/check.mustache")," with the supporting files bundle, and output to ",Object(i.b)("inlineCode",{parentName:"li"},"scripts/check.sh")," in your output directory. Note that we don't currently support setting file flags on output, so scripts such as these will either have to be sourced rather than executed, or have file flags set separately after generation (external to our tooling).")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"templateType")," option will default to ",Object(i.b)("inlineCode",{parentName:"p"},"SupportingFiles"),", so the option for ",Object(i.b)("inlineCode",{parentName:"p"},"other/check.mustache")," is redundant and provided to demonstrate the full template file configuration options. The available template types are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"API"),Object(i.b)("li",{parentName:"ul"},"APIDocs"),Object(i.b)("li",{parentName:"ul"},"APITests"),Object(i.b)("li",{parentName:"ul"},"Model"),Object(i.b)("li",{parentName:"ul"},"ModelDocs"),Object(i.b)("li",{parentName:"ul"},"ModelTests"),Object(i.b)("li",{parentName:"ul"},"SupportingFiles")),Object(i.b)("p",null,"Excluding ",Object(i.b)("inlineCode",{parentName:"p"},"SupportingFiles"),", each of the above options may result in multiple files. API related types create a file per API. Model related types create a file for each model."),Object(i.b)("p",null,"Note that user-defined templates will merge with built-in template definitions. If a supporting file with the sample template file path exists, it will be replaced with the user-defined template, otherwise the user-defined template will be added to the list of template files to compile. If the generator's built-in template is ",Object(i.b)("inlineCode",{parentName:"p"},"model_docs.mustache")," and you define ",Object(i.b)("inlineCode",{parentName:"p"},"model-docs.mustache"),", this will result in duplicated model docs (if ",Object(i.b)("inlineCode",{parentName:"p"},"destinationFilename")," differs) or undefined behavior as whichever template compiles last will overwrite the previous model docs (if ",Object(i.b)("inlineCode",{parentName:"p"},"destinationFilename")," matches the extension or suffix in the generator's code)."),Object(i.b)("h2",{id:"custom-generator-and-template"},"Custom Generator (and Template)"),Object(i.b)("a",{id:"creating-a-new-template"})," If none of the built-in generators suit your needs and you need to do more than just modify the mustache templates to tweak generated code, you can create a brand new generator and its associated templates. OpenAPI Generator can help with this, using the `meta` command:",Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar meta \\\n  -o out/generators/my-codegen -n my-codegen -p com.my.company.codegen\n")),Object(i.b)("p",null,"This will create a new directory ",Object(i.b)("inlineCode",{parentName:"p"},"out/generators/my-codegen"),", with all the files you need to get started - including a ",Object(i.b)("inlineCode",{parentName:"p"},"README.md"),". Once modified and compiled, you can use your new codegen just like any other, with your own custom-rolled logic."),Object(i.b)("p",null,"These names can be anything you like. If you are building a client for the whitespace language, maybe  you'd use the options ",Object(i.b)("inlineCode",{parentName:"p"},"-o out/generators/whitespace -n whitespace"),". They can be the same, or different, it doesn't matter. The ",Object(i.b)("inlineCode",{parentName:"p"},"-n")," value will be become the template name."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE")," Convention is to use kebab casing for names passed to ",Object(i.b)("inlineCode",{parentName:"p"},"-n"),". Example, ",Object(i.b)("inlineCode",{parentName:"p"},"scala-finatra")," would become ",Object(i.b)("inlineCode",{parentName:"p"},"ScalaFinatraGenerator"),"."),Object(i.b)("h3",{id:"use-your-new-generator-with-the-cli"},"Use your new generator with the CLI"),Object(i.b)("p",null,"To compile your library, enter the ",Object(i.b)("inlineCode",{parentName:"p"},"out/generators/my-codegen")," directory, run ",Object(i.b)("inlineCode",{parentName:"p"},"mvn package"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE")," Running your custom generator requires adding it to the classpath. This differs on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html"}),"Windows")," slightly from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/classpath.html"}),"unix"),".\nIf you are running a Windows Subsystem for Linux or a shell such as gitbash, and have issues with the unix variant, try the Windows syntax below."),Object(i.b)("p",null,"Now, execute the generator:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -cp out/generators/my-codegen/target/my-codegen-openapi-generator-1.0.0.jar:modules/openapi-generator-cli/target/openapi-generator-cli.jar org.openapitools.codegen.OpenAPIGenerator\n")),Object(i.b)("p",null,"For Windows users, you will need to use ",Object(i.b)("inlineCode",{parentName:"p"},";")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},":")," in the classpath, e.g."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'java -cp "out/generators/my-codegen/target/my-codegen-openapi-generator-1.0.0.jar;modules/openapi-generator-cli/target/openapi-generator-cli.jar" org.openapitools.codegen.OpenAPIGenerator\n')),Object(i.b)("p",null,"Note the ",Object(i.b)("inlineCode",{parentName:"p"},"my-codegen")," is an option for ",Object(i.b)("inlineCode",{parentName:"p"},"-g")," now, and you can use the usual arguments for generating your code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -cp out/codegens/customCodegen/target/my-codegen-openapi-generator-1.0.0.jar:modules/openapi-generator-cli/target/openapi-generator-cli.jar \\\n  org.openapitools.codegen.OpenAPIGenerator generate -g my-codegen \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml \\\n  -o ./out/myClient\n")),Object(i.b)("p",null,"For Windows users:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'java -cp "out/codegens/customCodegen/target/my-codegen-openapi-generator-1.0.0.jar;modules/openapi-generator-cli/target/openapi-generator-cli.jar" \\\n  org.openapitools.codegen.OpenAPIGenerator generate -g my-codegen \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml \\\n  -o ./out/myClient\n')),Object(i.b)("h3",{id:"use-your-new-generator-with-the-maven-plugin"},"Use your new generator with the maven plugin"),Object(i.b)("p",null,"Install your library to your local maven repository by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mvn clean install -f out/generators/my-codegen\n")),Object(i.b)("p",null,"This will install ",Object(i.b)("inlineCode",{parentName:"p"},"org.openapitools:my-codegen-openapi-generator:1.0.0")," to your local maven repository."),Object(i.b)("p",null,"You can use this as additional dependency of the ",Object(i.b)("inlineCode",{parentName:"p"},"openapi-generator-maven-plugin")," plugin and use ",Object(i.b)("inlineCode",{parentName:"p"},"my-codegen")," as ",Object(i.b)("inlineCode",{parentName:"p"},"generatorName")," value:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n  <groupId>org.openapitools</groupId>\n  <artifactId>openapi-generator-maven-plugin</artifactId>\n  <version>${openapi-generator-version}</version>\n  <executions>\n    <execution>\n      <id>generate-client-code</id>\n      <goals>\n        <goal>generate</goal>\n      </goals>\n      <configuration>\n        <generatorName>my-codegen</generatorName>\n        \x3c!-- other configuration ... --\x3e\n      </configuration>\n    </execution>\n  </executions>\n  <dependencies>\n    <dependency>\n      <groupId>org.openapitools</groupId>\n      <artifactId>my-codegen-openapi-generator</artifactId>\n      <version>1.0.0</version>\n    </dependency>\n  </dependencies>\n</plugin>\n")),Object(i.b)("p",null,"If you publish your artifact to a distant maven repository, do not forget to add this repository as ",Object(i.b)("inlineCode",{parentName:"p"},"pluginRepository")," for your project."),Object(i.b)("h2",{id:"selective-generation"},"Selective generation"),Object(i.b)("p",null,"You may not want to generate ",Object(i.b)("em",{parentName:"p"},"all")," models in your project. Likewise, you may want just one or two apis to be written.  If that's the case, you can use system properties or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/globals"}),"global properties")," to control the output."),Object(i.b)("p",null,"The default is generate ",Object(i.b)("em",{parentName:"p"},"everything")," supported by the specific library. Once you enable a feature, it will restrict the contents generated:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# generate only models\n--global-property models\n\n# generate only apis\n--global-property apis\n\n# generate only supporting files\n--global-property supportingFiles\n\n# generate models and supporting files\n--global-property models,supportingFiles\n")),Object(i.b)("p",null,"To control the specific files being generated, you can pass a CSV list of what you want:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'# generate the User and Pet models only\n--global-property models="User,Pet"\n\n# generate the User model and the supportingFile `StringUtil.java`:\n--global-property models=User,supportingFiles=StringUtil.java\n')),Object(i.b)("p",null,"To control generation of docs and tests for api and models, pass false to the option. For api, these options are  ",Object(i.b)("inlineCode",{parentName:"p"},"--global-property apiTests=false,apiDocs=false"),". For models, ",Object(i.b)("inlineCode",{parentName:"p"},"--global-property modelTests=false,modelDocs=false"),".\nThese options default to true and don't limit the generation of the feature options listed above (like ",Object(i.b)("inlineCode",{parentName:"p"},"--global-property api"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'# generate only models (with tests and documentation)\n--global-property models\n\n# generate only models (with tests but no documentation)\n--global-property models,modelDocs=false\n\n# generate only User and Pet models (no tests and no documentation)\n--global-property models="User,Pet",modelTests=false\n\n# generate only apis (without tests)\n--global-property apis,apiTests=false\n\n# generate only apis (modelTests option is ignored)\n--global-property apis,modelTests=false\n')),Object(i.b)("p",null,"When using selective generation, ",Object(i.b)("em",{parentName:"p"},"only")," the templates needed for the specific generation will be used."),Object(i.b)("p",null,'To skip models defined as the form parameters in "requestBody", please use ',Object(i.b)("inlineCode",{parentName:"p"},"skipFormModel")," (default to false) (this option is introduced at v3.2.2)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"--global-property skipFormModel=true\n")),Object(i.b)("p",null,"This option will be helpful to skip model generation due to the form parameter, which is defined differently in OAS3 as there's no form parameter in OAS3"),Object(i.b)("h2",{id:"ignore-file-format"},"Ignore file format"),Object(i.b)("p",null,"OpenAPI Generator supports a ",Object(i.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file, similar to ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," or ",Object(i.b)("inlineCode",{parentName:"p"},".dockerignore")," you're probably already familiar with."),Object(i.b)("p",null,"The ignore file allows for better control over overwriting existing files than the ",Object(i.b)("inlineCode",{parentName:"p"},"--skip-overwrite")," flag. With the ignore file, you can specify individual files or directories can be ignored. This can be useful, for example if you only want a subset of the generated code."),Object(i.b)("p",null,"Examples:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# OpenAPI Generator Ignore\n# Lines beginning with a # are comments\n\n# This should match build.sh located anywhere.\nbuild.sh\n\n# Matches build.sh in the root\n/build.sh\n\n# Exclude all recursively\ndocs/**\n\n# Explicitly allow files excluded by other rules\n!docs/UserApi.md\n\n# Recursively exclude directories named Api\n# You can't negate files below this directory.\nsrc/**/Api/\n\n# When this file is nested under /Api (excluded above),\n# this rule is ignored because parent directory is excluded by previous rule.\n!src/**/PetApiTests.cs\n\n# Exclude a single, nested file explicitly\nsrc/Org.OpenAPITools.Test/Model/AnimalFarmTests.cs\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file must exist in the root of the output directory."),Object(i.b)("p",null,"Upon first code generation, you may also pass the CLI option ",Object(i.b)("inlineCode",{parentName:"p"},"--ignore-file-override=/path/to/ignore_file")," for greater control over generated outputs. Note that this is a complete override, and will override the ",Object(i.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file in an output directory when regenerating code."),Object(i.b)("p",null,"Editor support for ",Object(i.b)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," files is available in IntelliJ via the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://plugins.jetbrains.com/plugin/7495--ignore"}),".ignore plugin"),"."),Object(i.b)("h2",{id:"customizing-the-generator"},"Customizing the generator"),Object(i.b)("p",null,"There are different aspects of customizing the code generator beyond just creating or modifying templates.  Each language has a supporting configuration file to handle different type mappings, etc:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ ls -1 modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/\nAbstractJavaJAXRSServerCodegen.java\nAbstractTypeScriptClientCodegen.java\n... (results omitted)\nTypeScriptAngularClientCodegen.java\nTypeScriptNodeClientCodegen.java\n")),Object(i.b)("p",null,"Each of these files creates reasonable defaults so you can get running quickly.  But if you want to configure package names, prefixes, model folders, etc. you can use a json config file to pass the values."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml \\\n  -g java \\\n  -o samples/client/petstore/java \\\n  -c path/to/config.json\n")),Object(i.b)("p",null,"and ",Object(i.b)("inlineCode",{parentName:"p"},"config.json")," contains the following as an example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "apiPackage" : "petstore"\n}\n')),Object(i.b)("p",null,"You can use also ",Object(i.b)("inlineCode",{parentName:"p"},"config.yml")," with following equivalent example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiPackage: "petstore"\n')),Object(i.b)("p",null,"Supported config options can be different per language. Running ",Object(i.b)("inlineCode",{parentName:"p"},"config-help -g {lang}")," will show available options.\n",Object(i.b)("strong",{parentName:"p"},"These options are applied via configuration file (e.g. config.json or config.yml) or by passing them with ",Object(i.b)("inlineCode",{parentName:"strong"},"-p {optionName}={optionValue}")),". (If ",Object(i.b)("inlineCode",{parentName:"p"},"-p {optionName}")," does not work, please open a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator/issues/new"}),"ticket")," and we'll look into it)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar config-help -g java\n")),Object(i.b)("p",null,"Output"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"CONFIG OPTIONS\n    modelPackage\n        package for generated models\n\n    apiPackage\n        package for generated api classes\n...... (results omitted)\n    library\n        library template (sub-template) to use:\n        jersey1 - HTTP client: Jersey client 1.18. JSON processing: Jackson 2.4.2\n        jersey2 - HTTP client: Jersey client 2.6\n        feign - HTTP client: Netflix Feign 8.1.1.  JSON processing: Jackson 2.6.3\n        okhttp-gson (default) - HTTP client: OkHttp 2.4.0. JSON processing: Gson 2.3.1\n        retrofit - HTTP client: OkHttp 2.4.0. JSON processing: Gson 2.3.1 (Retrofit 1.9.0)\n        retrofit2 - HTTP client: OkHttp 2.5.0. JSON processing: Gson 2.4 (Retrofit 2.0.0-beta2)\n        google-api-client - HTTP client: google-api-client 1.23.0. JSON processing: Jackson 2.8.9\n        rest-assured - HTTP client: rest-assured : 4.3.0. JSON processing: Gson 2.8.6. Only for Java8\n")),Object(i.b)("p",null,"Your config file for Java can look like"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "groupId":"com.my.company",\n  "artifactId":"MyClient",\n  "artifactVersion":"1.2.0",\n  "library":"feign"\n}\n')),Object(i.b)("p",null,"Or if you preffer yaml format it can look like"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'groupId: "com.my.company"\nartifactId: "MyClient"\nartifactVersion: "1.2.0"\nlibrary: "feign"\n')),Object(i.b)("p",null,"For all the unspecified options default values will be used."),Object(i.b)("p",null,"Another way to override default options is to extend the config class for the specific language.\nTo change, for example, the prefix for the Objective-C generated files, simply subclass the ",Object(i.b)("inlineCode",{parentName:"p"},"ObjcClientCodegen.java"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.mycompany.openapitools.codegen;\n\nimport org.openapitools.codegen.languages.*;\n\npublic class MyObjcCodegen extends ObjcClientCodegen {\n    static {\n        PREFIX = "HELO";\n    }\n}\n')),Object(i.b)("p",null,"and specify the ",Object(i.b)("inlineCode",{parentName:"p"},"classname")," when running the generator:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"-g com.mycompany.openapitools.codegen.MyObjcCodegen\n")),Object(i.b)("p",null,"Your subclass will now be loaded and overrides the ",Object(i.b)("inlineCode",{parentName:"p"},"PREFIX")," value in the superclass."),Object(i.b)("h2",{id:"bringing-your-own-models"},"Bringing your own models"),Object(i.b)("p",null,"Sometimes you don't want a model generated.  In this case, you can simply specify an import mapping to tell\nthe codegen what ",Object(i.b)("em",{parentName:"p"},"not")," to create.  When doing this, every location that references a specific model will\nrefer back to your classes.  Note, this may not apply to all languages..."),Object(i.b)("p",null,"To specify an import mapping, use the ",Object(i.b)("inlineCode",{parentName:"p"},"--import-mappings")," argument and specify the model-to-import logic as such:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"--import-mappings Pet=my.models.MyPet\n")),Object(i.b)("p",null,"Or for multiple mappings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"--import-mappings Pet=my.models.MyPet,Order=my.models.MyOrder\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"--import-mappings Pet=my.models.MyPet --import-mappings Order=my.models.MyOrder\n")))}c.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,l({ref:t},s,{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);