function normalizeCollegeName(name) {
            name = name.trim();
            const originalNameLower = name.toLowerCase();
// EVERYTHING MUST BE LOWERCASED FOR if (originalNameLower === "college name") 
            if (originalNameLower === "bing") return "Binghamton University";
            if (originalNameLower === "ualbany") return "University at Albany";
            if (originalNameLower === "sbu") return "Stony Brook University";
            if (originalNameLower === "ccny") return "City College of New York";
            if (originalNameLower === "bmcc") return "Borough of Manhattan Community College";
            if (originalNameLower === "csi") return "College of Staten Island";
            if (originalNameLower === "ub") return "University at Buffalo";
            if (originalNameLower.includes("harvard")) return "Harvard University";
            if (originalNameLower.includes("hobart and william smith colleges")) return "Hobart and William Smith Colleges";
            if (originalNameLower === "u rhode island") return "University of Rhode Island";
            if (originalNameLower === "maastricht") return "Maastricht University";
            if (originalNameLower === "ucsb") return "University of California, Santa Barbara";
                if (originalNameLower.includes("bates")) return "Bates College";
            if (originalNameLower.includes("brooklyn college")) return "Brooklyn College";
            if (originalNameLower.includes("yale")) return "Yale University";
            if (originalNameLower.includes("arizona state university")) return "Arizona State University";
            if (originalNameLower.includes("muhlenberg")) return "Muhlenberg College";
            if (originalNameLower.includes("hostos")) return "Hostos Community College";
            if (originalNameLower.includes("columbia")) return "Columbia University";
            if (originalNameLower.includes("occidental")) return "Occidental College";
            if (originalNameLower.includes("bentley")) return "Bentley University";
            if (originalNameLower.includes("davidson")) return "Davidson College";
            if (originalNameLower.includes("molloy")) return "Molloy University";
            if (originalNameLower.includes("rutgers")) return "Rutgers University";
            if (originalNameLower.includes("pratt")) return "Pratt Institute";
            if (originalNameLower.includes("fordham")) return "Fordham University";
            if (originalNameLower.includes("brown")) return "Brown University";
            if (originalNameLower.includes("dartmouth")) return "Dartmouth College";
            if (originalNameLower.includes("tufts")) return "Tufts University";
            if (originalNameLower.includes("northwestern")) return "Northwestern University";
            if (originalNameLower.includes("syracuse")) return "Syracuse University";
            if (originalNameLower.includes("brandeis")) return "Brandeis University";
            if (originalNameLower.includes("middlebury")) return "Middlebury College";
            if (originalNameLower.includes("hamilton")) return "Hamilton College";
            if (originalNameLower.includes("emerson")) return "Emerson College";
            if (originalNameLower.includes("emory")) return "Emory University";
            if (originalNameLower.includes("pace")) return "Pace University";
            if (originalNameLower.includes("williams")) return "Williams College";
            if (originalNameLower.includes("bard")) return "Bard College";
            if (originalNameLower.includes("barnard")) return "Barnard College";
            if (originalNameLower.includes("ithaca")) return "Ithaca College";
            if (originalNameLower.includes("vassar")) return "Vassar College";
            if (originalNameLower.includes("union")) return "Union College";
            if (originalNameLower.includes("haverford")) return "Haverford College";
            if (originalNameLower === "smith") return "Smith College";
            if (originalNameLower.includes("oberlin")) return "Oberlin College";
            if (originalNameLower.includes("cornell")) return "Cornell University";
            if (originalNameLower.includes("vanderbilt")) return "Vanderbilt University";
            if (originalNameLower.includes("princeton")) return "Princeton University";
            if (originalNameLower.includes("duke")) return "Duke University";
            if (originalNameLower.includes("tulane")) return "Tulane University";
            if (originalNameLower.includes("bucknell")) return "Bucknell University";
            if (originalNameLower.includes("skidmore")) return "Skidmore College";
            if (originalNameLower.includes("babson")) return "Babson College";
            if (originalNameLower.includes("colgate")) return "Colgate University";
            if (originalNameLower.includes("towson")) return "Towson University";
            if (originalNameLower.includes("boston college")) return "Boston College";
            if (originalNameLower.includes("boston u")) return "Boston University";
            if (originalNameLower.includes("georgetown")) return "Georgetown University";
            if (originalNameLower.includes("baruch")) return "Baruch College";
            if (originalNameLower.includes("hunter")) return "Hunter College";
            if (originalNameLower.includes("upenn") || originalNameLower.includes("u penn")) return "University of Pennsylvania";
            if (originalNameLower.includes("washu")) return "Washington University in St. Louis";
            if (originalNameLower.includes("umich")) return "University of Michigan";
            if (originalNameLower.includes("neu")) return "Northeastern University";
            if (originalNameLower.includes("mcgill")) return "McGill University";
            if (originalNameLower === "nyu shanghai") return "NYU Shanghai";
            if (originalNameLower === "nyu london") return "NYU London";
            if (originalNameLower.includes("nyu")) return "New York University";
            if (originalNameLower.includes("usc")) return "University of Southern California";
            if (originalNameLower.includes("ucla")) return "University of California, Los Angeles";
            if (originalNameLower.includes("ucsd")) return "University of California San Diego";
            if (originalNameLower.includes("uc berkeley")) return "University of California, Berkeley";
            if (originalNameLower === "mit") return "Massachusetts Institute of Technology";
            if (originalNameLower.includes("rit")) return "Rochester Institute of Technology";
            if (originalNameLower.includes("uvm")) return "University of Vermont";
            if (originalNameLower.includes("u colorado boulder")) return "University of Colorado Boulder";
            if (originalNameLower.includes("howard")) return "Howard University";
            if (originalNameLower.includes("uw madison")) return "University of Wisconsin-Madison";
            if (originalNameLower.includes("umass amherst")) return "University of Massachusetts Amherst";
            if (originalNameLower.includes("penn state")) return "Pennsylvania State University";
            if (originalNameLower.includes("flordia state university") || originalNameLower.includes("florida state university")) return "Florida State University";
            if (originalNameLower.includes("johns hopkins") || originalNameLower.includes("john hopkins")) return "Johns Hopkins University";
            if (originalNameLower.includes("cooper union")) return "The Cooper Union";
            if (originalNameLower.includes("uva")) return "University of Virginia";
            if (originalNameLower.includes("upitt")) return "University of Pittsburgh";
            if (originalNameLower.includes("uarizona")) return "University of Arizona";
            if (originalNameLower.includes("us naval academy")) return "United States Naval Academy";
            if (originalNameLower.includes("case western")) return "Case Western Reserve University";
            if (originalNameLower.includes("gwu")) return "George Washington University";
            if (originalNameLower.includes("urochester")) return "University of Rochester";
            if (originalNameLower.includes("wpi")) return "Worcester Polytechnic Institute";
            if (originalNameLower.includes("indiana university") || originalNameLower.includes("indiania university")) return "Indiana University Bloomington";
            if (originalNameLower.includes("university of washington") || originalNameLower === "u washington") return "University of Washington";
            if (originalNameLower.includes("umaryland college park") || originalNameLower.includes("u maryland college park")) return "University of Maryland, College Park";
            if (originalNameLower.includes("fairfield university") || originalNameLower.includes("farifield university")) return "Fairfield University";
            if (originalNameLower.includes("umiami")) return "University of Miami";
            if (originalNameLower.includes("university of florida") || originalNameLower.includes("uflorida") || originalNameLower.includes("uflordia")) return "University of Florida";
            if (originalNameLower.includes("uchicago")) return "University of Chicago";
            if (originalNameLower.includes("carnegie mellon")) return "Carnegie Mellon University";
            if (originalNameLower.includes("st andrews") || originalNameLower.includes("university of st andrews")) return "University of St Andrews";
            if (originalNameLower.includes("purdue")) return "Purdue University";
            if (originalNameLower.includes("fit")) return "Fashion Institute of Technology";
            if (originalNameLower.includes("amda")) return "AMDA College of the Performing Arts";
            if (originalNameLower.includes("university of the highlands and islands")) return "University of the Highlands and Islands";
             if (originalNameLower.includes("osu") && !originalNameLower.includes("ohio state")) return "Ohio State University";
            if (originalNameLower === "lafayette") return "Lafayette College";
            for (const key in collegeCoordsAndInfo) {
                if (key.toLowerCase() === originalNameLower) {
                    return key;
                }
            }

            let baseName = name;
            const posseMatch = name.match(/\s*\(posse\)/i);
            const questbridgeMatch = name.match(/\s*\(questbridge\)/i);
            const macaulayMatch = name.match(/\s*\(macaulay\)/i);

            if (posseMatch) baseName = name.replace(posseMatch[0], '').trim();
            else if (questbridgeMatch) baseName = name.replace(questbridgeMatch[0], '').trim();
            else if (macaulayMatch) baseName = name.replace(macaulayMatch[0], '').trim();

            if (baseName !== name) {
                const normalizedBase = normalizeCollegeName(baseName);
                if (collegeCoordsAndInfo[normalizedBase]) {
                    return normalizedBase;
                }
                return baseName;
            }
            return name;
        }
