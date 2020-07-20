import React, { useState } from "react";
import styles from "./Configure.module.scss";
import Selection from "../../common/Selection";
import SelectionOption from "../../common/SelectionOption";
import Button from "../../common/Button";
import Icon from "@mdi/react";
import { mdiClose, mdiArrowRight } from "@mdi/js";

const mods = [
    {
        title: "MCMMO",
        price: "$4.99",
    },
    {
        title: "Journey",
        price: "$1.99",
    },
];

const texturePacks = [
    {
        title: "Fantasy",
        price: "$0.99",
    },
    {
        title: "HD",
        price: "$0.99",
    },
    {
        title: "Paper",
        price: "0.99",
    },
    {
        title: "Candy",
        price: "$1.99",
    },
];

export interface Props {
    title: string;
    data?: any;
    onSubmit: (data: any) => any;
}

export default (props: Props) => {
    const [selectedMods, setSelectedMods] = useState(
        (props.data?.mods || []) as number[]
    );
    const [selectedTexturePack, setSelectedTexturePack] = useState(
        null as number | null
    );
    const [whitelist, setWhitelist] = useState(
        (props.data?.whitelist || []) as string[]
    );

    const modsElements = mods.map((mod, i) => (
        <SelectionOption
            selected={selectedMods.includes(i)}
            onClick={() =>
                setSelectedMods((m) =>
                    m.includes(i) ? m.filter((a) => a !== i) : [...m, i]
                )
            }
            key={i}
        >
            <div style={{ fontWeight: "bold" }}>{mod.title}</div>
            <div>{mod.price}</div>
        </SelectionOption>
    ));
    const texturePackElements = texturePacks.map((pack, i) => (
        <SelectionOption
            selected={i === selectedTexturePack}
            onClick={() =>
                selectedTexturePack === i
                    ? setSelectedTexturePack(null)
                    : setSelectedTexturePack(i)
            }
            key={i}
        >
            <div style={{ fontWeight: "bold" }}>{pack.title}</div>
            <div>{pack.price}</div>
        </SelectionOption>
    ));
    const whitelistElements = whitelist.map((username, i) => (
        <div className={styles.whitelistRow} key={i}>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                    const value = e.target.value;
                    if (value !== "") {
                        setWhitelist((a) =>
                            a.map((v, j) => (j === i ? value : v))
                        );
                    } else {
                        setWhitelist((a) => a.filter((_, j) => i !== j));
                    }
                }}
                value={username}
            />
            <span
                onClick={() => setWhitelist((a) => a.filter((_, j) => i !== j))}
            >
                <Icon
                    path={mdiClose}
                    size={1.2}
                    title="Remove"
                    color="#b71c1c88"
                />
            </span>
        </div>
    ));
    whitelistElements.push(
        <div className={styles.whitelistRow} key={whitelistElements.length}>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                    const value = e.target.value;
                    setWhitelist((a) => [...a, value]);
                }}
                value=""
            />
            <span />
        </div>
    );
    return (
        <div className={styles.serverBuilder}>
            <h1>{props.title}</h1>
            <section>
                <h2>Configure</h2>
                <p>Name, Game mode, Difficulty, Seed</p>
                <div className={styles.configurations}>
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <label>Game mode:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="game_mode"
                                value="survival"
                            />
                            Survival
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="game_mode"
                                value="creative"
                            />
                            Creative
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="game_mode"
                                value="adventure"
                            />
                            Adventure
                        </label>
                    </div>
                    <label>Difficulty:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="peaceful"
                            />
                            Peaceful
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="easy"
                            />
                            Easy
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="normal"
                            />
                            Normal
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="hard"
                            />
                            Hard
                        </label>
                    </div>
                    <label>Seed:</label>
                    <input type="text" name="seed" />
                </div>
            </section>
            <section>
                <h2>Mods</h2>
                <Selection>{modsElements}</Selection>
            </section>
            <section>
                <h2>Texture Packs</h2>
                <Selection>{texturePackElements}</Selection>
            </section>

            <section>
                <h2>Whitelist</h2>
                <div className={styles.whitelist}>{whitelistElements}</div>
            </section>

            <section>
                <Button
                    style={{ float: "right" }}
                    onClick={() =>
                        props.onSubmit({
                            mods: selectedMods,
                            texturePack: selectedTexturePack,
                            whitelist,
                        })
                    }
                >
                    Submit&nbsp;&nbsp;
                    <Icon path={mdiArrowRight} size={0.8} color="white" />
                </Button>
            </section>
        </div>
    );
};
