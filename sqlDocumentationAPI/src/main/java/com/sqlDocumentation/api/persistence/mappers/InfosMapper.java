package com.sqlDocumentation.api.persistence.mappers;

import com.sqlDocumentation.api.domain.model.Information;
import com.sqlDocumentation.api.persistence.model.InfoObjct;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface InfosMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "obj", target = "clause"),
            @Mapping(source = "info", target = "definition")
    })
    Information toInformation(InfoObjct infoObjct);
    List<Information> toInformations(List<InfoObjct> infoObjcts);

    @InheritInverseConfiguration
    InfoObjct toInfoObjct(Information information);
    List<InfoObjct> toInfoObjcts (List<Information> informations);
}
