define("KatiaArtILlenguatge_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
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
					"entitySchemaName": "KatiaArtILlenguatge"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "470c0ce8-c44f-43ba-a681-b3fa2f3a7524",
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
				"name": "KatiaNombreAlumno",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.KatiaName",
					"control": "$KatiaName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KatiaTelefono",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_KatiaTelefono_1948ng1",
					"labelPosition": "auto",
					"control": "$PDS_KatiaTelefono_1948ng1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KatiaCorreo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_KatiaCorreo_1eaysfz",
					"labelPosition": "auto",
					"control": "$PDS_KatiaCorreo_1eaysfz"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "KatiaAsignatura",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_KatiaAsignatura_t5e8qci",
					"labelPosition": "auto",
					"control": "$PDS_KatiaAsignatura_t5e8qci",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_bq3jqt7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_bq3jqt7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "KatiaAsignatura",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KatiaFechaAlta",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_KatiaFechaAlta_ee298vv",
					"labelPosition": "auto",
					"control": "$PDS_KatiaFechaAlta_ee298vv",
					"pickerType": "date"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KatiaHorasMesActual",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_KatiaHorasMesActual_f61hu64",
					"labelPosition": "auto",
					"control": "$PDS_KatiaHorasMesActual_f61hu64",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "KatiaDineroAPagar",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_KatiaDineroAPagar_4s8xeh5",
					"labelPosition": "auto",
					"control": "$PDS_KatiaDineroAPagar_4s8xeh5",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"KatiaName": {
						"modelConfig": {
							"path": "PDS.KatiaNombreAlumno"
						}
					},
					"PDS_KatiaTelefono_1948ng1": {
						"modelConfig": {
							"path": "PDS.KatiaTelefono"
						}
					},
					"PDS_KatiaCorreo_1eaysfz": {
						"modelConfig": {
							"path": "PDS.KatiaCorreo"
						}
					},
					"PDS_KatiaAsignatura_t5e8qci": {
						"modelConfig": {
							"path": "PDS.KatiaAsignatura"
						}
					},
					"PDS_KatiaFechaAlta_ee298vv": {
						"modelConfig": {
							"path": "PDS.KatiaFechaAlta"
						}
					},
					"PDS_KatiaHorasMesActual_f61hu64": {
						"modelConfig": {
							"path": "PDS.KatiaHorasMesActual"
						}
					},
					"PDS_KatiaDineroAPagar_4s8xeh5": {
						"modelConfig": {
							"path": "PDS.KatiaDineroAPagar"
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
							"entitySchemaName": "KatiaArtILlenguatge"
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
					if (request.attributeName === 'PDS_KatiaFechaAlta_ee298vv') { 		// if data change
						var fecha_alta = await request.$context.PDS_KatiaFechaAlta_ee298vv;
						var final_mes = new Date(fecha_alta.getYear(), fecha_alta.getMonth() + 1, 0);
						//console.log(final_mes.toString());
						var diffDays = final_mes.getDate() - fecha_alta.getDate();
						var dies_asis = diffDays/7;
						var horas_mes = dies_asis * 2;
						var dinero_mes = horas_mes * 10;
						request.$context.PDS_KatiaHorasMesActual_f61hu64 = horas_mes;
						request.$context.PDS_KatiaDineroAPagar_4s8xeh5 = dinero_mes;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});