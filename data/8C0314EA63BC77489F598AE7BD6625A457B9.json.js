GS.dataCache['8C0314EA63BC77489F598AE7BD6625A457B9'] = {
    "uid": "8C0314EA63BC77489F598AE7BD6625A457B9",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "VICTOR",
        "type": "vn.scene",
        "parentId": "8E26B3610B5A34438F587631426552D73206",
        "chapterUid": "49DC3EE6267197419859C9E4D23776294B50",
        "order": 1,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.EraseText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1
                    }
                },
                "indent": 0,
                "uid": "B18997F194E0674CEB38C0285AA55192E9D4",
                "expanded": false
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "68DC75A046A70943871AC928E79D733CF35A",
                "indent": 0
            },
            {
                "id": "gs.MessageSettings",
                "params": {
                    "useCharacterColor": 0,
                    "paragraphSpacing": 0,
                    "backlog": 0,
                    "bold": 0,
                    "italic": 0,
                    "linePadding": 6,
                    "lineHeight": 0,
                    "lineSpacing": 0,
                    "smallCaps": 0,
                    "underline": 0,
                    "strikeThrough": 0,
                    "autoErase": 1,
                    "waitAtEnd": 1,
                    "font": "Verdana",
                    "size": 40,
                    "outline": 0,
                    "outlineSize": 4,
                    "shadow": 0,
                    "shadowOffsetX": 1,
                    "shadowOffsetY": 1,
                    "color": {
                        "red": 255,
                        "green": 255,
                        "blue": 255,
                        "alpha": 255
                    },
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "fieldFlags": {
                        "autoErase": 0,
                        "waitAtEnd": 1,
                        "backlog": 0,
                        "font": 1,
                        "size": 1,
                        "color": 1,
                        "useCharacterColor": 1,
                        "bold": 1,
                        "italic": 1,
                        "smallCaps": 1,
                        "underline": 1,
                        "strikeThrough": 1,
                        "lineHeight": 1,
                        "lineSpacing": 1,
                        "linePadding": 1,
                        "paragraphSpacing": 1,
                        "outline": 1,
                        "outlineColor": 1,
                        "outlineSize": 1,
                        "shadow": 1,
                        "shadowColor": 1,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1
                    }
                },
                "indent": 0,
                "uid": "942BC71A6FE32443B78814683D9E06A854E8",
                "expanded": false
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "58E1F86874EC37466A8BBC12822B1D7EC766",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Oi, eu sou o Victor!\nTenho 16 anos.\nAdoro viajar para lugares frios.\nConheço muito bem minha cidade!\nVelocidade: 5/5\nMatemática: 2/5\nObervação: 4/5\nE eu diria que consigo identificar semelhanças entre fenômenos geográficos: 3/5"
                    },
                    "position": 0,
                    "characterId": "5C079A01512B3743D258CDA1897DA16CCF1A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3100752124F8334C8688C8678C18E2B64CE4",
                "expanded": false
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            "me identifiquei, sou ele!",
                            "90FBF9E0739B814CF42A435709268E48A97C"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7AFA11360022134CAA892F21300DD0837137"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5C079A01512B3743D258CDA1897DA16CCF1A",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "BCF435223EF7F1474D680755188CAFF2DC06"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "D817084774AB154CCE68B7B2587B0058EBFA",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "DECD6CA19EA9E645329B8A07E90FCF5BB3D8"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B5EB90613FD27245BC7A8EF5B9C7EB66C47C",
                    "parameters": {
                        "values": [
                            "hmm, deixa eu ver a outra opção...",
                            "A678F87E7CA96943792AF8824DB6C65EE75A"
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D87B613D94687446785A12A4B82811BC8EB7"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "87C691AD6DF5C84BCF1A8CC5E61FDD36119E",
                    "parameters": {
                        "values": [
                            {
                                "scope": 1,
                                "index": 0,
                                "domain": "com.degica.vnm.default"
                            }
                        ]
                    }
                },
                "indent": 0,
                "uid": "C8A4690A89AF4643079955C3F6AB237D3F73"
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "CCC6856A5C2E534EF28B91516623341732CD",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 0,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1
                    }
                },
                "uid": "D0CA867A36119146677909D1A04DE33C7F53",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "8E26B3610B5A34438F587631426552D73206",
                        "name": "Escolha de personagem"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1BC7167F2C113243964BFB31CFD8D5CA4A99"
            }
        ],
        "livePreviewDisabled": false,
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}