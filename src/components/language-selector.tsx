"use client";

import {Language} from "@/lib/languages";
import {useEffect} from "react";

import {getCategories} from "@/app/actions"

type Props = {
        selected: Language[];
        items: ReadonlyArray<Language>;
}


// How does this work? howto save in DB from use client component
async function clickEventlistener(icon) {
        console.info("language-selectore component clickEventlistener icon: ", icon);
    
        // Get language from button clicked using data
        let key = icon.target.dataset.lang;
        console.info("language-selectore component clickEventlistener key: ", key);
        
        // Test some call
        let c = await getCategories();
        console.log("Categories: ", c);

}

function initCarousel(items, icons) {
        // setEventListeners(icons);
}

function selectIcons(items, icons, selected) {

}

/**
 * LanguageSelector
 * @description Idea is to have a language selector, with Icons of the languages and the ones selected are saved in DB for this user
 **/
export function LanguageSelector({
        selected,
        items
}: Props)
{
        useEffect(() => {
                let icons = document.getElementsByClassName("carousel__photo");
                initCarousel(items, icons);               
        }, []);

        const selectedIconCss = "peer-checked:bg-green-200  peer-checked:text-white px-2 py-0 rounded-full transition";
        const unselectedIconCss = "peer-checked:bg-green-10  peer-checked:text-white px-2 py-0 rounded-full transition";

	return (
<div className="carousel">
        <form id="language-form" className="flex flex-wrap gap-4">
                {
                        items.map(lang => (
                                <label className="flex items-center gap-2 px-2 py-1 rounded-full border border-gray-300 cursor-pointer transition hover:bg-green-50" key={lang.key}>
                                        <input type="checkbox" name="languages" value="c++" className="hidden peer" defaultChecked/>
                                        <span className={1==1 ? unselectedIconCss : selectedIconCss}>
                                        <img
                                                key={lang.key}
                                                data-lang={lang.key}
                                                className="carousel__photo"
                                                src={`${lang.icon}`}
                                                alt={lang.label}    
                                                onClick={clickEventlistener}                                            
                                                width={20}
                                        />

                                        </span>
                                </label>
                        ))
                }
        </form>
</div>
	)
}

