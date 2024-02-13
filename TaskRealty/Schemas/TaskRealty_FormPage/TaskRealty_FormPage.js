/* jshint esversion: 11 */
define("TaskRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "TaskRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "2c14e203-cc83-4480-a6ed-b58f2991da3a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "TaskRealtyTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.TaskName",
					"control": "$TaskName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TaskRealtyPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_TaskColumn2_7pec879",
					"labelPosition": "auto",
					"control": "$PDS_TaskColumn2_7pec879",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TaskRealtyArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_TaskRealtyArea_fbwq94n",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyArea_fbwq94n"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TaskRealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_TaskRealtyType_f5ybwg0",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyType_f5ybwg0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_f0v81eq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_f0v81eq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "TaskRealtyType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TaskRealtyOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_TaskRealtyOfferType_01nlvg2",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyOfferType_01nlvg2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_so5ajj2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_so5ajj2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "TaskRealtyOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TaskRealtyComment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_TaskRealtyComment_z1qkwqu",
					"labelPosition": "auto",
					"control": "$PDS_TaskRealtyComment_z1qkwqu",
					"multiline": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"TaskName": {
						"modelConfig": {
							"path": "PDS.TaskRealtyTitle"
						}
					},
					"PDS_TaskColumn2_7pec879": {
						"modelConfig": {
							"path": "PDS.TaskRealtyPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "task.BBValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceMustBeGreaterZero)#"
								}
							}
						}
					},
					"PDS_TaskRealtyArea_fbwq94n": {
						"modelConfig": {
							"path": "PDS.TaskRealtyArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "task.BBValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(AreaMustBeGreaterZero)#"
								}
							}
						}
					},
					"PDS_TaskRealtyType_f5ybwg0": {
						"modelConfig": {
							"path": "PDS.TaskRealtyType"
						}
					},
					"PDS_TaskRealtyOfferType_01nlvg2": {
						"modelConfig": {
							"path": "PDS.TaskRealtyOfferType"
						}
					},
					"PDS_TaskRealtyComment_z1qkwqu": {
						"modelConfig": {
							"path": "PDS.TaskRealtyComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "TaskRealty"
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (request.attributeName === 'PDS_TaskColumn2_7pec879') {
						var price = await request.$context.PDS_TaskColumn2_7pec879;
						if (price > 50000) {
							request.$context.enableAttributeValidator('PDS_TaskRealtyComment_z1qkwqu', 'required');
						} else {
							request.$context.disableAttributeValidator('PDS_TaskRealtyComment_z1qkwqu', 'required');
						}
					}
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"task.BBValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"task.BBValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});