const didToDIDDocumentURL = did => {
    const [_, method, identifier] = did.split(":");
    if (_ !== "did") {
      throw new Error("Invalid DID");
    }
    if (method !== "github") {
      throw new Error("Invalid DID, should look like did:github:USERNAME");
    }
  
    if (method === "github") {
      const base = "https://raw.githubusercontent.com/";
      const didRepoDir = "/master/index.jsonld";
      const url = `${base}${identifier}/ghdid${didRepoDir}`;
      return url;
    }
  };

  const request = didToDIDDocumentURL('did:github:jirayuth289');
  console.log(request)
