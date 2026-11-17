"use client";

import {Language} from "@/lib/languages";
import {useEffect} from "react";

type Props = {
        items: ReadonlyArray<Language>;
}

function setEventListeners(icons) {

}

function initCarousel(items, icons) {
        setEventListeners(icons);
}

/**
 * LanguageSelector
 * @description Idea is to have a language selector, with Icons of the languages and the ones selected are saved in DB for this user
 **/
export function LanguageSelector({
        items
}: Props)
{
        useEffect(() => {
                let icons = document.getElementsByClassName("carousel__photo");
                initCarousel(items, icons);
        }, []);

	return (
<div className="carousel">
        <form id="language-form" className="flex flex-wrap gap-4">
                {
                        items.map(lang => (
                                <label className="flex items-center gap-2 px-2 py-1 rounded-full border border-gray-300 cursor-pointer transition hover:bg-green-50" key={lang.key}>
                                        <input type="checkbox" name="languages" value="c++" className="hidden peer" defaultChecked/>
                                        <span className="peer-checked:bg-green-200 peer-checked:text-white px-2 py-0 rounded-full transition">
                                        <img
                                                key={lang.key}
                                                className="carousel__photo"
                                                src={`${lang.icon}`}
                                                alt={lang.label}
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

