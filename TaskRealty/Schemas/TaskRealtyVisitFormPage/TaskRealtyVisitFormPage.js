define("TaskRealtyVisitFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_sk2bdl1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.TaskRealtyVisitDS_TaskVisitDateTime_exkkyda",
					"labelPosition": "above",
					"control": "$TaskRealtyVisitDS_TaskVisitDateTime_exkkyda"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_3ndbx1d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.TaskRealtyVisitDS_TaskPotencialCustomer_h8c331c",
					"labelPosition": "above",
					"control": "$TaskRealtyVisitDS_TaskPotencialCustomer_h8c331c",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_kgu87xc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kgu87xc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3ndbx1d",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_31ap1ht",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.TaskRealtyVisitDS_TaskComment_vj7tvfm",
					"labelPosition": "above",
					"control": "$TaskRealtyVisitDS_TaskComment_vj7tvfm"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"TaskRealtyVisitDS_TaskVisitDateTime_exkkyda": {
						"modelConfig": {
							"path": "TaskRealtyVisitDS.TaskVisitDateTime"
						}
					},
					"TaskRealtyVisitDS_TaskPotencialCustomer_h8c331c": {
						"modelConfig": {
							"path": "TaskRealtyVisitDS.TaskPotencialCustomer"
						}
					},
					"TaskRealtyVisitDS_TaskComment_vj7tvfm": {
						"modelConfig": {
							"path": "TaskRealtyVisitDS.TaskComment"
						}
					},
					"TaskRealtyVisitDS_TaskOwner_7s2il29": {
						"modelConfig": {
							"path": "TaskRealtyVisitDS.TaskOwner"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"TaskRealtyVisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "TaskRealtyVisit"
							}
						}
					},
					"primaryDataSourceName": "TaskRealtyVisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});