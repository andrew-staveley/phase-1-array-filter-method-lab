const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(array, name) {
    return array.filter(nameMatcher);
    function nameMatcher(element) {
        if (element.toLowerCase() === name.toLowerCase()) {
            return true
        }
    }
}

function fuzzyMatch(array, firstLetters) {
    return array.filter(fuzzyMatcher);
    function fuzzyMatcher(element) {
        if (element.slice(0, 2) === firstLetters) {
            return true
        }
    }
}

function matchName(array, name) {
    return array.filter(nameMatcher2);
    function nameMatcher2(element) {
        if (element.name === name) {
            return true
        }
    }
}

