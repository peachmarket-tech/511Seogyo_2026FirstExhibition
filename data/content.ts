export const CONTENT = {
    ko: {
        landing: {
            title: ["그건", "네", "생각이고"],
            enter: "전시 입장하기",
            project: ["511", "PROJECT", "서교"]
        },
        ui: {
            next: "NEXT >",
            prev: "< PREV",
            scrollHint: "Scroll Down ↓",
            toggleExtrasOpen: "추가 사례 접기 (-)",
            toggleExtrasClose: "비슷한 말이 더 궁금하다면? (+)",
            guideLabel: "EXHIBITION GUIDE",
            mainEpisode: "MAIN EPISODE",
            section1Guide: "테이블에서 내가 고른 답 카드를 가져오세요.\n카드 속 질문에 답을 작성한 뒤\nSECTION 2로 이동해주세요.",
            section2GuideNext: "작품 감상이 끝났다면\n가져온 카드를 들고\n다음 섹션으로 이동해주세요.",
            section4Walk: "Walk Through ↓",
            section4Intro: "S1에서 확인한 나의 확신, S2에서 만난 타인의 시선. 두 관점은 서로 다른 힘을 가지고 있습니다. 정원을 걷듯 두 관점 사이를 거닐며, 당신에게 필요한 도구를 찾아보세요.",
            section4Q: "지금 당신을 가장 괴롭히는 고민은 무엇인가요?",
            section4Sub: "그 문제를 해결하려면\n어떤 힘이 더 필요한지 생각해보세요.",
            reflection: "REFLECTION"
        },
        stories: [
            {
                id: "s1",
                title: "괜찮아 (It's okay)",
                dialogue: [
                    { speaker: "●", text: "내가 말 세게 했지? 미안." },
                    { speaker: "○", text: "괜찮아." }
                ],
                options: [
                    "“용서받았다”로 이해.",
                    "“이 정도에서 멈추자”로 이해.",
                    "“지금은 괜찮지만, 다음엔 다르다”로 이해."
                ]
            },
            {
                id: "s2",
                title: "나중에 (Later)",
                dialogue: [
                    { speaker: "●", text: "이번 주에 한번 볼래?" },
                    { speaker: "○", text: "나중에 보자." }
                ],
                options: [
                    "“지금은 아닌 언젠가.”로 이해.",
                    "알아서 포기해주길 바람.",
                    "“정말로 나중에 하겠다.”로 이해."
                ]
            },
            {
                id: "s3",
                title: "알겠어 (Got it)",
                dialogue: [
                    { speaker: "●", text: "다음부터는 그렇게 하지 말자." },
                    { speaker: "○", text: "알겠어." }
                ],
                options: [
                    "“너의 마음을 알았다.”로 이해.",
                    "“일단 그만하자”로 이해.",
                    "“그런 행동을 하지 않도록 앞으로 주의하겠다.”로 이해."
                ]
            }
        ],
        sections: [
            {
                title: "일단 내가 맞고",
                desc: "우리는 같은 말을 하면서도 다른 이야기를 합니다. 당신의 관점은 어떤 색깔인가요? 아래의 대화들을 읽고, 당신이 평소에 이해하는 방식을 확인해보세요.",
                docent: {
                    title: "“하나의 현상을 해석하는 여러 관점이 존재한다.”",
                    content: `전시의 출발점은 ‘타인을 이해하자’가 아니라, 관객이 먼저 **자기 관점을 밖으로 꺼내는 것**입니다. 짧은 사건을 읽고 답변 카드를 선택한 뒤 이유를 적는 과정은, 관객이 무의식적으로 갖고 있던 해석과 판단 기준(전제/가치/경험)을 스스로 드러내게 만듭니다. 또한 내 카드를 걸어두고 타인의 카드를 한 장 획득하는 구조는 ‘다른 관점’이 추상적 개념이 아니라 **손에 쥐고 이동하는 동행자**가 되도록 설계했습니다.\n\n즉 S1은 관객에게 “전시는 네 생각에서 시작된다”는 참여의 주도권을 주면서도, 동시에 “네 생각만이 전부는 아니다”라는 균열의 씨앗을 심습니다.`
                },
                action: null
            },
            {
                title: "근데 너도 일리있고",
                desc: "내 생각만이 전부는 아닙니다. 나와 다른 색의 카드를 골라 '동행자'로 삼으세요. 내 관점과 동행자의 관점은 어떤 전제와 경험의 차이가 있나요?",
                docent: {
                    title: "“관점은 정답이 아니라 렌즈다.”",
                    content: `“같은 사건에도 **다른 우선순위**가 작동한다.”\n“내 관점의 장점은, 어떤 순간엔 **단점**이 된다.”\n\nS2는 관점의 차이를 ‘취향’이나 ‘성격’의 문제로 흐리지 않고, **관점이 작동하는 방식**으로 보여줍니다. 하나의 상황을 보는 3가지 관점(렌즈)의 장단점을 제시함으로써, 관객은 자신과 동행자 카드의 선택이 왜 달랐는지 “감정”이 아니라 “구조(우선순위/해석 방식/관계 가정)”로 이해할 수 있습니다.\n\n또한 이 구간에서 핵심은 “누가 맞냐”가 아니라 “각 관점은 어떤 순간에 유효하고, 어떤 순간에 위험해지는가”를 비교하게 하는 것입니다. 관객이 자신의 관점을 상대화하고, 타인의 관점을 ‘정답’이 아닌 ‘렌즈’로 받아들이는 기반을 만듭니다.`
                },
                action: null,
                guide: {
                    step1Title: "STEP 01. EXCHANGE",
                    step1Desc: "내가 작성한 카드를 벽에 걸고,\n**나와 다른 색의 카드**를\n하나 골라 가져가세요.",
                    step2Title: "STEP 02. VIEWING POINT",
                    step2Desc: "벽면에 그려진 작품을 감상해보세요.\n다음 세 가지에 주목해 볼까요?",
                    points: [
                        "**충돌과 조화:** 서로 다른 선들이 만나 만드는 긴장감",
                        "**새로운 패턴:** 관점이 겹치며 만들어지는 의도치 않은 모양",
                        "**거리두기:** 가까이서 볼 때와 멀리서 볼 때의 차이"
                    ]
                }
            },
            {
                title: "답장 기다리는 중이고",
                desc: "푸, 쇼펜하우어, 산티아고에게 당신의 고민을 메일로 보내보세요. 같은 문장도 관점에 따라 완전히 다르게 읽힙니다.",
                docent: {
                    title: "“세상을 바라보는 관점에는 정답이 아닌 장단점이 있다.”",
                    content: `“관점이 바뀌면, 문제의 **조명이 바뀐다**.”\n“이해는 동의가 아니라 **시도**다.”\n\nS3는 전시의 핵심 장치로, 관객이 ‘다른 관점’을 **설명으로 배우는 것이 아니라 대화로 경험**하게 합니다. 관객은 AI 서비스를 통해 곰돌이 푸, 쇼펜하우어, 산티아고 노인에게 메일을 보내고 답장을 받습니다. 동일한 고민과 문장도 관점에 따라 완전히 다른 방식으로 읽히고 조명된다는 것을 체감하면서, 관객은 ‘그건 네 생각이고’가 단절의 말이 아니라 **맥락을 여는 질문으로 전환될 수 있음**을 경험합니다.\n\n여기서 중요한 것은 관객이 답장을 통해 “동의”에 도달하는 것이 아니라, “아 저 맥락이면 그렇게 볼 수 있겠네”라는 **이해 시도**의 감각을 얻는 것입니다.`
                },
                action: "메일 보내러가기"
            },
            {
                title: "생각 좀 해보고",
                desc: "타인의 관점을 '정답'으로 받아들일 필요는 없습니다. 나의 확신과 타인의 시선 사이, 지금 나의 고민에는 어떤 도구가 더 적합할까요?",
                docent: {
                    title: "“나의 관점으론 문제인 것이, 다른 관점에선 문제가 아닐 수 있다.”",
                    content: `“지금 나에게 필요한 건 **어떤 렌즈**일까?”\n“다른 관점의 장점을 발견하고 상황에 맞게 **가져올 수 있다**.”\n\nS4는 정보와 자극이 많은 구간(S1~S3) 이후, 관객이 자신에게 일어난 변화(균열/호기심/혼란)를 **가라앉히고 정리**할 수 있도록 만든 완충 구간입니다. 관객은 잠시 걸으며 “내게 도움이 될 수 있는 다른 관점의 장점”을 선택해봅니다. 이때 관점은 더 이상 ‘타인의 것’이 아니라, 내가 필요할 때 꺼낼 수 있는 **도구(렌즈)**로 재정의됩니다.\n\n즉 S4는 관점 탐색을 자기 삶에 연결하는 “전환 구간”으로, 전시 경험이 일회성 감상이 아니라 **일상 적용 가능성**을 갖게 합니다.`
                },
                action: null,
                perspectives: [
                    { title: "괜찮아, 널 용서해", desc: "따뜻하게 봉합되지만, 상처가 남아도 말로 정리되지 않을 수 있음." },
                    { title: "괜찮아, 이제 그만하자.", desc: "즉각적인 평온은 얻지만, 문제는 해결이 아니라 보류로 남아서 반복될 수 있음." },
                    { title: "괜찮아, 다음엔 그러지마.", desc: "관계가 계속 굴러가지만, 상대가 눈치 못 채면 “괜찮다”를 면죄부로 쓸 위험이 있음." }
                ]
            },
            {
                title: "그래도 좀 이해했고",
                desc: "이해는 결과가 아니라 거리입니다. 당신은 동행자의 관점을 어디까지 이해했나요? 벽 위의 선에 카드를 걸어 당신의 거리를 표시해주세요.",
                docent: {
                    title: "“이해는 결과가 아니라 거리다.”",
                    content: `“벽은 없어지지 않아도, **다룰 수 있다**.”\n\nS5는 전시의 주제 ‘보이지 않는 벽’을 가장 직접적으로 체화시키는 구간입니다. 긴 복도 벽을 따라 관객은 동행자 관점을 얼마나 이해해 볼 수 있었는지 돌아보고, 이해한 정도만큼의 위치에 카드를 걸어둡니다. 이 장치는 이해를 ‘성공/실패’가 아니라 **거리와 과정**으로 표현하게 만듭니다.\n\n관객은 “완전히 이해해야만 한다”는 부담에서 벗어나, “나는 여기까지는 이해했고, 여기부터는 벽이 있다”를 인정하면서, 벽을 현실적으로 다루는 태도를 갖게 됩니다. 전시가 제안하는 결론은 화해나 합의가 아니라, **맥락을 확인하고 이해의 거리를 조절하는 방법**입니다.`
                },
                action: "벽에 카드 걸기"
            },
            {
                title: "이건 찍어야겠고",
                desc: "그건 네 생각이고. 이 문장은 이제 단절이 아닌 연결의 시작입니다. 당신의 변화를 기록하고 공유하세요.",
                action: "포토존 카메라 켜기"
            }
        ]
    },
    en: {
        landing: {
            title: ["IT'S", "YOUR", "OPINION"],
            enter: "ENTER EXHIBITION",
            project: ["511", "PROJECT", "Seogyo"]
        },
        ui: {
            next: "NEXT >",
            prev: "< PREV",
            scrollHint: "Scroll Down ↓",
            toggleExtrasOpen: "Hide Extra Examples (-)",
            toggleExtrasClose: "Curious about similar phrases? (+)",
            guideLabel: "EXHIBITION GUIDE",
            mainEpisode: "MAIN EPISODE",
            section1Guide: "Pick up the answer card you chose from the table.\nWrite your reason on the back, then\nmove to SECTION 2.",
            section2GuideNext: "After appreciating the artwork,\ntake your card and\nmove to the next section.",
            section4Walk: "Walk Through ↓",
            section4Intro: "Your certainty from S1, the other's perspective from S2. These two viewpoints hold different powers. Walk through the garden between these perspectives and find the tool you need.",
            section4Q: "What is troubling you the most right now?",
            section4Sub: "Think about which power you need more\nto resolve that issue.",
            reflection: "REFLECTION"
        },
        stories: [
            {
                id: "s1",
                title: "It's okay",
                dialogue: [
                    { speaker: "●", text: "I was too harsh, wasn't I? Sorry." },
                    { speaker: "○", text: "It's okay." }
                ],
                options: [
                    "Understood as “You are forgiven.”",
                    "Understood as “Let's stop here.”",
                    "Understood as “Okay for now, but not next time.”"
                ]
            },
            {
                id: "s2",
                title: "Later",
                dialogue: [
                    { speaker: "●", text: "Shall we meet this week?" },
                    { speaker: "○", text: "Let's meet later." }
                ],
                options: [
                    "Understood as “Someday, not now.”",
                    "Hoping they give up on their own.",
                    "Understood as “Will really do it later.”"
                ]
            },
            {
                id: "s3",
                title: "Got it",
                dialogue: [
                    { speaker: "●", text: "Let's not do that from now on." },
                    { speaker: "○", text: "Got it." }
                ],
                options: [
                    "Understood as “I know how you feel.”",
                    "Understood as “Let's stop for now.”",
                    "Understood as “I will be careful not to do that again.”"
                ]
            }
        ],
        sections: [
            {
                title: "First, I'm Right",
                desc: "We speak the same words but tell different stories. What color is your perspective? Read the dialogues below and check how you usually interpret them.",
                docent: {
                    title: "“Multiple perspectives exist for interpreting a single phenomenon.”",
                    content: `The starting point is not to 'understand others', but for the audience to **bring out their own perspective**. The process of reading a short event, choosing an answer card, and writing the reason forces the audience to reveal their unconscious interpretation and judgment criteria (premises/values/experiences). Also, the structure of hanging my card and taking someone else's card is designed so that 'different perspective' is not an abstract concept but a **companion you hold in your hand**.\n\nIn other words, S1 gives the audience the initiative of participation saying "The exhibition starts with your thoughts", but at the same time plants a seed of crack saying "Your thoughts are not everything".`
                },
                action: null
            },
            {
                title: "But You Make\u00A0Sense\u00A0Too",
                desc: "My thoughts are not everything. Pick a card of a different color and make it your 'companion'. What differences in premises and experiences exist between my perspective and the companion's?",
                docent: {
                    title: "“Perspective is not an answer, but a lens.”",
                    content: `“Different **priorities** work for the same event.”\n“The strength of my perspective becomes a **weakness** at some moments.”\n\nS2 shows **how perspective works**, not blurring the difference into 'taste' or 'personality'. By presenting the pros and cons of 3 perspectives (lenses) viewing a single situation, the audience can understand why their choice differed from the companion card not emotionally but structurally (priorities/interpretation method/relationship assumption).\n\nThe key here is not "Who is right" but comparing "At what moment is each perspective effective, and when does it become dangerous". It creates a foundation for the audience to relativize their own perspective and accept others' not as 'the answer' but as a 'lens'.`
                },
                action: null,
                guide: {
                    step1Title: "STEP 01. EXCHANGE",
                    step1Desc: "Hang your card on the wall,\nand pick one card of a **different color**\nto take with you.",
                    step2Title: "STEP 02. VIEWING POINT",
                    step2Desc: "Appreciate the artwork on the wall.\nShall we focus on these three points?",
                    points: [
                        "**Conflict & Harmony:** Tension created by meeting different lines",
                        "**New Patterns:** Unintended shapes formed by overlapping perspectives",
                        "**Distancing:** The difference between viewing up close and from afar"
                    ]
                }
            },
            {
                title: "Waiting For A\u00A0Reply",
                desc: "Send your worries via email to Pooh, Schopenhauer, and Santiago. The same sentence reads completely differently depending on the perspective.",
                docent: {
                    title: "“There are no right answers in perspectives, only pros and cons.”",
                    content: `“When the perspective changes, the **lighting** of the problem changes.”\n“Understanding is not agreement but an **attempt**.”\n\nS3 is the core device where the audience experiences 'different perspectives' **through conversation, not explanation**. The audience sends emails to Pooh, Schopenhauer, and the Old Man Santiago via AI service and receives replies. By experiencing how the same worry and sentence are read and illuminated completely differently depending on the perspective, the audience experiences that 'That's your thought' can switch from a word of disconnection to a **question opening context**.\n\nImportantly, the audience does not reach 'agreement' through the reply, but gains the sensation of **attempting to understand**, saying “Ah, in that context, it could be seen that way.”`
                },
                action: "Go to Send Email"
            },
            {
                title: "Thinking About It",
                desc: "You don't need to accept others' perspectives as the 'answer'. Between my certainty and others' gaze, what tool is more suitable for my current worry?",
                docent: {
                    title: "“What is a problem in my view might not be in another.”",
                    content: `“What **lens** do I need right now?”\n“I can **borrow** the strengths of other perspectives depending on the situation.”\n\nS4 is a buffer zone created for the audience to **calm down and organize** the changes (cracks/curiosity/confusion) that occurred after the stimulus-heavy sections (S1~S3). The audience walks for a while and selects the \"strengths of other perspectives that can help me\". Here, perspective is redefined not as 'someone else's thing' but as a **tool (lens)** I can take out when needed.\n\nIn other words, S4 is a \"transition zone\" connecting perspective exploration to their life, giving the exhibition experience **applicability to daily life** rather than just a one-time appreciation.`
                },
                action: null,
                perspectives: [
                    { title: "It's okay, I forgive you.", desc: "It seals warmly, but even if scars remain, they may not be verbally resolved." },
                    { title: "It's okay, let's stop now.", desc: "Instant peace is gained, but the problem remains pending rather than solved, and may repeat." },
                    { title: "It's okay, don't do it next time.", desc: "The relationship continues, but if the other person doesn't notice, 'It's okay' risks being used as an indulgence." }
                ]
            },
            {
                title: "Understood A\u00A0Bit",
                desc: "Understanding is not a result but a distance. How far have you understood your companion's perspective? Mark your distance by hanging the card on the line on the wall.",
                docent: {
                    title: "“Understanding is not a result, but a distance.”",
                    content: `“Even if the wall doesn't disappear, **we can handle it**.”\n\nS5 is the section that most directly embodies the exhibition theme 'Invisible Wall'. Along the long corridor wall, the audience reflects on how much they could understand the companion's perspective and hangs the card at the position corresponding to that degree. This device makes understanding expressed as **distance and process**, not 'success/failure'.\n\nThe audience breaks free from the burden of \"I must understand completely\", admits \"I understood up to here, and from here there is a wall\", and adopts an attitude of dealing with the wall realistically. The conclusion proposed by the exhibition is not reconciliation or agreement, but **a method of checking context and adjusting the distance of understanding**.`
                },
                action: "Hang Card on Wall"
            },
            {
                title: "Gotta Take A\u00A0Pic",
                desc: "That's your thought. This sentence is now the beginning of connection, not disconnection. Record and share your changes.",
                action: "Open Photo Zone Camera"
            }
        ]
    }
};
