(() => {


    class Accordion {
        constructor(obj) {

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            const triggerLength = $trigger.length;

            for(let triggerIndex = 0; triggerIndex < triggerLength; triggerIndex++) {
                $trigger[triggerIndex].addEventListener("click",(e) => {
                    clickHandler(e);
                });
            }

            function clickHandler(e) {
                e.preventDefault();
                const $target = e.currentTarget;
                const $content = $target.nextElementSibling;
                if ($content.style.display === "block") {
                    $content.style.display = "none";
                } else {
                    $content.style.display = "block";
                }
            }







        }
    }

    const fucking = new Accordion({
        hookName: "#js-faq",
        tagName: "p"
    });

    const fuckingAccordion = new Accordion({
        hookName: "#js-accordon",
        tagName: "a"
    });




})();