// структура данных для единичного фотоисточника

var object = {"id": {"type": "number",
"title": "Идентификатор",
"value": Number},
    "data": {
        "inner_id": {"type": "number",
            "title": "Внутренний идентификатор",
            "value": Number
        },
        "name": {"type": "string",
            "title": "Название",
            "value": String
        },
        "createPlace": {"type": "string",
            "title": "Место создания",
            "value": String
        },
        "findPlace": {"type": "string",
            "title": "Место создания",
            "value": String
        },
        "description": {"type": "string",
            "title": "Описание",
            "value": String
        },
        "partsCount": {"type": "number",
            "title": "Количество составляющих",
            "value": Number
        },
        "regNumber": {"type": "number",
            "title": "Регистрационный номер Госкаталога",
            "value": Number
        },
        "invNumber": {"type": "string",
            "title": "Инвентарный номер",
            "value": String
        },
        "gikNumber": {"type": "string",
            "title": "Номер по ГИК (Главная инвентарная книга)",
            "value": String
        },
        "type": {"type": "string",
            "title": "Тип предмета",
            "value": "Фотографии и негативы"
        },
        "statusId": {"type": "number",
            "title": "Идентификатор статуса предмета",
            "value": Number
        },
        "museum":
            {"title":"Музей",
            "type":"object",
            "properties":
                {"name":
                    {"type":"string",
                    "title":"Музей",
                    "value": String},
                "id":
                    {"type":"number",
                    "title":"Идентификатор музея",
                    "value": Number},
                "code":
                    {"type":"string",
                    "title":"КОПУК музея",
                    "value": String},
                "inn":
                    {"type":"string",
                    "title":"ИНН музея",
                    "value": String}
                },
            },
        "typology":
            {"title":"Типология",
            "type":"object",
            "properties":
                {"name":
                    {"type":"string",
                    "title":"Типология",
                    "value": String},
                "id":
                    {"type":"number", 
                    "title":"Идентификатор типологии",
                    "value": String}
                }
            },
        "dimStr":
            {"type":"string",
            "title":"Строковое описание размеров",
            "value": String
            },
        "startDate":
            {"type":"number",
            "logicalType":"Date",
            "title":"Интервал времени создания предмета (начало)",
            "value": Number
            },
        "finishDate":
            {"type":"number",
            "logicalType":"Date",
            "title":"Интервал времени создания предмета (окончание)",
            "value": Number
            },
        "precision":
            {"type":"string",
            "title":"Точность задания времени (день, месяц, год, век, эпоха)",
            "value": String,
            },
        "periodStr":
            {"type":"string",
            "title":"Дата создания предмета (строка)",
            "value": String
            },
        "regDate": 
            {"type":"string",
            "logicalType":"Date",
            "title":"Дата регистрации записи",
            "value": String},
        "extSystem":
            {"title":"Музейная система",
            "type":"object",
            "value": Object,
            "properties":
                {"name":
                    {"type":"string",
                    "title":"Музейная система",
                    "value": String
                    },
                "id": 
                    {"type": "string",
                    "title": "Идентификатор музейной системы",
                    "value": String
                    }
                }
            },
        "tags": {
            "type": "array",
            "title": "Ключевые слова",
            "value": Array,
            "items": {
                "type": "string",
                "title": "Тег",
                "value": String
            }
        },
        "provenance": {
            "type": "string",
            "title": "Краткое описание истории бытования (провенанс) предмета",
            "value": String
            },
        "authors": {"type":"array",
            "title":"Авторы",
            "items":
                {"type":"string",
                "title":"Автор",
                "logicalType":"String",
                "value": String}
        },
        "technologies":
            {"type":"array",
            "title":"Материалы, техники.",
            "value": Array,
            "items":
                {"type":"string",
                "title":"Items",
                "logicalType":"String",
                "value": String}
        },
        "images":
            {"type":"array",
            "value": Array,
            "items":
                {"type":"object",
                "properties":
                    {"type":
                        {"type":"string",
                        "description":"Тип картинки",
                        "title":"Type",
                        "logicalType":"String",
                        "value": String},
                    "url":
                        {"type":"string",
                        "description":"Адрес картинки", 
                        "title":"Url",
                        "logicalType":"URL",
                        "value": String},
                    "preview":
                        {"type":"string",
                        "description":"Превью картинки",
                        "title":"Preview",
                        "logicalType":"String",
                        "value": String},
                    "title":
                        {"type":"string",
                        "description":"Заголовок картинки",
                        "title":"Title",
                        "logicalType":"String",
                        "value": String}
                    },
                "title":"Изображение",
                "logicalType":"Image",
                "value": Object
                },
            "title":"Изображения"},
        "descript_author":
                {"type": "string",
                    "title": "Составитель описания",
                    "value": String
                },
        "linkedSources": 
            {"type": "array",
            "title": "Связанные с предметом источники, библиография",
            "value": Array,
            "items": { "type": "string",
                "title": "Источник",
                "value": String
                }
            },
        "collection":
            {"type": "string",
            "title": "Название коллекции",
            "value": String
            },
        "numberInCollectionBook": {
            "type": "string",
            "title": "Номер по инвентарной книге коллекции",
            "value": String
            },
        "numberNegative": {
            "type": "string",
            "title": "Номер негатива или изображения (по Фототеке музея)",
            "value": String
        },
        "incomeSourse": {
            "type": "string",
            "title": "Источник и способ поступления предмета, акт приема, сведения о лице, передавшем предмет, дата регистрации",
            "value": String
        },
        "sourseType": {
            "type": "string",
            "title": "Тип фотоисточника",
            "value": String,
            // Рекомендованные типы - Даггеротип, Гелиогравюра, Негатив, Слайд, Отпечаток
        },
        "spacePercept": {
            "type": "string",
            "title": "Характер пространственного восприятия фотоисточника",
            "value": String
            // Рекомендованные типы  - Плосткостная фотография, Стереофотография (стереопара), стереослайд, голография
        },
        "conservationInf": {
            "type": "array",
            "title": "Сведения о реставрации, сохранность",
            "value": Array,
            "items": {
                "type": "string",
                "value": String
                // описание сохранности включает - виды повреждений (утраты, выбелы, следы влажности), 
                //их расположение, имя реставратора, время реставрации, характер изменения и т.д. 
                // Раздел нуждается в отдельной разработке
            }
        },
        //МЕТАДАННЫЕ ИЗОБРАЖЕНИЯ
    "imgData": 
        {"type": "object",
        "title": "Метаданные изображения",
        "value": Object,
        "properties": {
            "frontSideData": {"type": "array",
                "title": "Метаданные изображения лицевой стороны",
                "value": Array,
                "items": {
                    "area": {"type": "object",
                        "title": "Пространство",
                        "value": Object,
                        "properties": { 
                            "id": { "type": "number",
                                "title": "Идентификатор",
                                "value": Number
                            },
                            "URI": {"type": "string",
                                "title": "URI",
                                "value": String
                            },
                            "idPlace": {"type": "object",
                                "title": "Идентификатор места",
                                "value": Object,
                                "properties": {
                                    "geoLabels": {"type": "array",
                                        "title": "Геометки",
                                        "value": Array,
                                        "items": {
                                            "type": "string",
                                            "title": "Геометка",
                                            "value": String
                                        }   
                                    },
                                    "geoName": {"type": "string",
                                        "title": "Название",
                                        "value": String
                                    }
                                },
                            },
                            "geoNameUp": {"type": "string",
                                "title": "Вышестоящее географическое наименование",
                                "value": String
                            },
                            "type": {"type": "string",
                                "title": "Тип пространства",
                                "value": String // Рекомендованный тип: Интерьер или Экстерьер
                            },
                            "semantic": {"type": "array",
                                "title": "Семантика - текстовое представление",
                                "value": Array,
                                "items": {
                                    "type": "object",
                                    "title": "Семантический объект",
                                    "value": Object
                                }
                            },
                            "segmentationAddress": {"type": "array",
                                "title": "Адресация сегмента - технотронная информация",
                                "value": Array,
                                "items": {
                                    "type": "object",
                                    "title": "Объект сегментации",
                                    "value": Object
                                }
                            },            
                            "otherAttrs": {"type": "array",
                                "title": "Другие аттрибуты в строковом представлении",
                                "value": Array,
                                "items": {
                                    "type": "string",
                                    "title": "Атрибут",
                                    "value": String
                                }
                            }, 
                        },
                    },
                    "visualItems": {"type": "array",
                        "title": "Визуальные объекты",
                        "value": Array,
                        "properties": {
                            "symbolicObject": {"type": "objectArray",
                                "title": "Символический объект",
                                "value": Object,
                                "properties": {
                                    "id": { "type": "number",
                                        "title": "Идентификатор",
                                        "value": Number
                                    },
                                    "URI": {"type": "string",
                                        "title": "URI",
                                        "value": String
                                    },
                                    "type": {"type": "string",
                                        "title": "Тип",
                                        "value": String // Текст, Символ и т.д.
                                    },
                                    "language": {"type": "string",
                                        "title": "Язык",
                                        "value": String
                                    },
                                    "RecordType": {"type": "string",
                                        "title": "Тип записи",
                                        "value": String // Рекомендованные типы - Рукописный или Печатный
                                    },
                                    "WritingType": {"type": "string",
                                        "title": "Тип письменности",
                                        "value": String 
                                        // Рекомендованные типы: Пиктографический, Идеографический, Фоноидеографический, Фонетический
                                    },
                                    "content": {"type": "строка",
                                        "title": "Содержание",
                                        "value": String
                                    },
                                    "otherAttrs": {"type": "stringArray",
                                        "title": "Другие аттрибуты в строковом представлении",
                                        "value": Array,
                                        "items": {
                                            "type": "string",
                                            "title": "Атрибут",
                                            "value": String
                                        }
                                    },
                                    "semantic": {"type": "array",
                                        "title": "Семантика - текстовое представление",
                                        "value": Array,
                                        "items": {
                                            "type": "object",
                                            "title": "Семантический объект",
                                            "value": Object
                                        }
                                     },
                                    "segmentationAddress": {"type": "array",
                                        "title": "Адресация сегмента - технотронная информация",
                                        "value": Array,
                                        "items": {
                                            "type": "object",
                                            "title": "Объект сегментации",
                                            "value": Object
                                        }
                                    }            
                                }
                            },
                            "reference": {"type": "array",
                                "title": "Референсы",
                                "value": Array,
                                "items": { "type": "object",
                                    "title": "Референс",
                                    "value": Object,
                                    "properties": {
                                        "id": { "type": "number",
                                            "title": "Идентификатор",
                                            "value": Number
                                        },
                                        "URI": {"type": "string",
                                            "title": "URI",
                                            "value": String
                                        },
                                        "type": {"type": "string",
                                            "title": "Тип",
                                            "value": String // картина, фотография, отражение
                                        },
                                        "objectMetadata": {"type": "objectArray",
                                        "title": "Метаданные изображения",
                                        "value": Object
                                        // ПРИСВАИВАЮТСЯ ВСЕ АТТРИБУТЫ imgData
                                        },
                                        "segmentationAddress": {"type": "array",
                                            "title": "Адресация сегмента - технотронная информация",
                                            "value": Array,
                                            "items": {
                                                "type": "object",
                                                "title": "Объект сегментации",
                                                "value": Object
                                            }
                                        } 
                                    }
                                },
                            },
                            "entities": {"type": "array",
                                "title": "Сущности",
                                "value": Array,
                                "items": { "type": "object",
                                    "title": "Сущность",
                                    "value": Object,
                                    "properties": {
                                        "id": { "type": "number",
                                            "title": "Идентификатор",
                                            "value": Number
                                        },
                                        "URI": {"type": "string",
                                            "title": "URI",
                                            "value": String
                                        },
                                        "name": { "type": "string",
                                            "title": "Название",
                                            "value": String
                                        },
                                        "originType": {"type": "string",
                                            "title": "Происхождение",
                                            "value": String 
                                            // рекомендованные поля Естественное или Искусственное
                                        },
                                        "type": {"type": "string",
                                            "title": "Тип",
                                            "value": String
                                            // рекомендованные типы - Персона, Предмет, Строение, Объект живого мира, Паттерн
                                        },
                                        "otherAttrs": {"type": "array",
                                            "title": "Другие аттрибуты в строковом представлении",
                                            "value": Array,
                                            "items": {
                                                "type": "string",
                                                "title": "Атрибут",
                                                "value": String
                                            }
                                        },
                                        "tags": {"type": "array",
                                            "title": "Теги",
                                            "value": Array,
                                            "items": {
                                                "type": "string",
                                                "title": "Тег",
                                                "value": String
                                            }
                                        },
                                        "semantic": {"type": "array",
                                            "title": "Семантика - текстовое представление",
                                            "value": Array,
                                            "items": {
                                                "type": "object",
                                                "title": "Семантический объект",
                                                "value": Object
                                            }
                                        },
                                        "segmentationAddress": {"type": "array",
                                            "title": "Адресация сегмента - технотронная информация",
                                            "value": Array,
                                            "items": {
                                                "type": "object",
                                                "title": "Объект сегментации",
                                                "value": Object
                                            }
                                        } 
                                    }     
                                }
                            }
                        }
                    }
                }
            } 
        }
    }

        },
        "backSideData": {"type": "objectArray",
            "title": "Метаданные изображения оборотной стороны",
            "exist": Boolean,
            "value": Object,
            "properties": {
            // все составляющие лицевой стороны относятся к оборотной стороне
                }
        }
}


// var json = JSON.stringify(object)


// типы данных 
/*var array = [
    1,
    'string',
    true,
    false,
    null,
    [1,2,3],
    {"name": "string"}
] */