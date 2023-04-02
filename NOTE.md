    "bin": "src/index.js",
    "pkg": {
    	"targets": [ "latest-macos-x64" ],
    	"assets": [
    	  "src/*.js"
    	]
    },


    	"package": "pkg package.json --output src-tauri/binaries/sidecar && node scripts/binaryRename.js"

        [
        {
          "name": "binaries/sidecar-x86_64-apple-darwin",
          "sidecar": true,
          "args": [
            "node"
          ]
        },
        {
          "name": "binaries/sidecar-x86_64-apple-darwin",
          "sidecar": true,
          "args": [
            "node"
          ]
        }
      ]

      "externalBin": [
        "binaries/sidecar-x86_64-apple-darwin"
      ],
